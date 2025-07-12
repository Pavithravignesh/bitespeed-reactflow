import { useState, useRef, useCallback, useMemo } from "react";
import {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import type {
  ReactFlowInstance,
  Node,
  Edge,
  Connection,
  OnConnect,
  OnNodesChange,
  OnEdgesChange,
  OnInit,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import actualNode from "./components/ActualNode";
import "./App.css";
import ReactFlowCanvas from "./components/ReactFlowCanvas";
import type { UpdateNodeType } from "./types/updateNode";
import React from "react";

let nodeId = 0;

const App = () => {

  // manageing node and edge
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // to track the new created target edge 
  const [targetTrack, setTargetTrack] = useState<string[]>([]);

  // react-flow instance
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  // to tracking updating node
  const [changeNode, setChangeNode] = useState<UpdateNodeType | null>(null);

  // to track selected node
  const [nodeSelected, setNodeSelected] = useState<boolean>(false);

  // notify message related local variable
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [textColor, setTextColor] = useState<string | undefined>(undefined);

  // variable for mentioning the main-wrapper element
  const wrapper = useRef<HTMLDivElement>(null);

  // variable to 1st node's id value
  const firstNodeId = useRef<string | null>(null);


  // fn response for draggin
  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move"; // enable dragging power for the element
    }
  }, []);

  // fn response for dropping a new node into the canvas
  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();

    // checking whether the intended element has been pick to drop
    if (!wrapper.current || !reactFlowInstance) return;

    const canvasMeasures = wrapper.current.getBoundingClientRect();

    // possible details about the element which been dragged into for the dropping
    const elementDetails = event.dataTransfer.getData("application/reactflow");

    if (typeof elementDetails === "undefined" || !elementDetails) {
      console.log(elementDetails); // not a intened node
      return;
    }

    const position = reactFlowInstance.project({ x: event.clientX - canvasMeasures.left, y: event.clientY - canvasMeasures.top })


    // creatioon of new node
    const newNode: Node = {
      id: `node_${nodeId}`,
      type: "node",
      position,
      data: { heading: "Message has been sent", label: `text message ${nodeId}` },
    }

    // making a node of 1st node's id for future usage
    if (nodeId === 0) {
      firstNodeId.current = newNode.id;
    }

    // increamenting the nodeId value +1
    nodeId++;

    // setting the newly created node in local state variable
    setNodes((previousNode) => previousNode.concat(newNode));

  }, [reactFlowInstance, setNodes])

  // handling new connection
  const onConnect: OnConnect = useCallback((params: Connection) => {

    // checking edges duplication
    const duplication = edges.find((edge) =>
      edge.source === params.source &&
      edge.target === params.target &&
      edge.sourceHandle === params.sourceHandle &&
      edge.targetHandle === params.targetHandle);

    if (duplication) return;

    // we can have more than one source edge can connects to target edge by using setEdges 
    setEdges((edge) => addEdge({ ...params, markerEnd: { type: "arrowclosed" as MarkerType } }, edge));

    // updating like what are the node has beeen having edges
    setTargetTrack((prev) => [...prev, params.target!]);

  }, [edges, setEdges]);


  // custon edit - making the react-flow free
  const proOptions = { hideAttribution: true };

  // Custom node types with header and label - this will called only once
  const nodeTypes = useMemo(
    () => ({
      node: actualNode,
    }),
    []
  );

  // fn to handle node updating
  const nodeUpdate = useCallback((event: React.MouseEvent, node: Node) => {
    setChangeNode(node as UpdateNodeType);
    setNodeSelected(true);
  }, []);

  // fn to save the node flow with some vaildtion on their connection
  const saveFlow = () => {
    if (!reactFlowInstance) return;

    const nodes = reactFlowInstance.getNodes();
    const edges = reactFlowInstance.getEdges();

    // For each node, check if it appears as a source or target in any edge
    const allConnected = nodes.every(node =>
      edges.some(edge => edge.source === node.id || edge.target === node.id)
    );

    if (!allConnected) {
      setErrorText("Each node must have at least one connection.");
      setTextColor("redMessage");
      setTimeout(() => setErrorText(undefined), 5000);
    } else {
      setErrorText("Saved Flow");
      setTextColor("greenMessage");
      setTimeout(() => setErrorText(undefined), 5000);
    }
  };

  return (
    <div className="appflow" style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <ReactFlowCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          proOptions={proOptions}
          onNodeClick={nodeUpdate}
          nodeTypes={nodeTypes}
          wrapper={wrapper}
          errorText={errorText}
          textColor={textColor}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default App;
