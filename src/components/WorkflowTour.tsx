import React, { useState, useEffect } from 'react';
import { TourProvider, useTour } from '@reactour/tour';
import { BsPlayCircle, BsQuestionCircle } from 'react-icons/bs';

interface WorkflowTourProps {
    children: React.ReactNode;
}

const TourContent: React.FC = () => {
    const { setIsOpen, setCurrentStep } = useTour();

    const startTour = () => {
        setCurrentStep(0);
        setIsOpen(true);
    };

    return (
        <div className="fixed top-2 right-70 z-50">
            <button
                onClick={startTour}
                className="flex items-center gap-2 bg-[#FFAD5E] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#e69c4d] transition-colors duration-200"
                title="Start guided tour"
            >
                <BsPlayCircle className="text-lg" />
                <span className="hidden sm:inline">Start Tour</span>
                <BsQuestionCircle className="text-lg sm:hidden" />
            </button>
        </div>
    );
};

const WorkflowTour: React.FC<WorkflowTourProps> = ({ children }) => {
    const [, setIsFirstVisit] = useState(false);

    useEffect(() => {
        // Check if this is the user's first visit
        const hasVisited = localStorage.getItem('workflow-tour-visited');
        if (!hasVisited) {
            setIsFirstVisit(true);
            localStorage.setItem('workflow-tour-visited', 'true');
        }
    }, []);

    const steps = [
        {
            selector: '.main-flow',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">🎯 Welcome to Workflow Builder!</h3>
                    <p className="text-gray-700">
                        This is your workflow canvas where you'll create and connect message nodes to build automated workflows.
                    </p>
                </div>
            ),
            position: 'center' as const,
        },
        {
            selector: 'aside',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">📦 Node Library</h3>
                    <p className="text-gray-700 mb-2">
                        This sidebar contains draggable message nodes that you can use to build your workflow.
                    </p>
                    <p className="text-sm text-gray-600">
                        💡 <strong>Try it:</strong> Drag a message node from here to the canvas!
                    </p>
                </div>
            ),
        },
        {
            selector: '.main-node',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">💬 Message Node</h3>
                    <p className="text-gray-700 mb-2">
                        This is a draggable message node. You can drag it to the canvas to create workflow steps.
                    </p>
                    <p className="text-sm text-gray-600">
                        🎯 <strong>Feature:</strong> Each node represents a message that will be sent in your workflow.
                    </p>
                </div>
            ),
        },
        {
            selector: '.react-flow__viewport',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">🎨 Workflow Canvas</h3>
                    <p className="text-gray-700 mb-2">
                        This is your main workspace where you'll build your workflow by placing and connecting nodes.
                    </p>
                    <p className="text-sm text-gray-600">
                        🖱️ <strong>Navigation:</strong> Pan by dragging, zoom with mouse wheel or controls.
                    </p>
                </div>
            ),
        },
        {
            selector: '.react-flow__controls',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">🎛️ Canvas Controls</h3>
                    <p className="text-gray-700 mb-2">
                        Use these controls to navigate your workflow canvas:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>🔍 <strong>Zoom In/Out:</strong> Adjust canvas zoom level</li>
                        <li>🎯 <strong>Fit View:</strong> Center all nodes in view</li>
                        <li>🔄 <strong>Lock:</strong> Prevent accidental panning</li>
                    </ul>
                </div>
            ),
        },
        {
            selector: '.rightbar',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">⚙️ Node Editor</h3>
                    <p className="text-gray-700 mb-2">
                        This panel shows when you select a node. Here you can:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>✏️ <strong>Edit message content</strong></li>
                        <li>💾 <strong>Save your workflow</strong></li>
                        <li>🔙 <strong>Go back to node library</strong></li>
                    </ul>
                </div>
            ),
        },
        {
            selector: '.savingChange',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">💾 Save Workflow</h3>
                    <p className="text-gray-700 mb-2">
                        Click this button to save your workflow. The system will validate that all nodes are properly connected.
                    </p>
                    <p className="text-sm text-gray-600">
                        ✅ <strong>Validation:</strong> Each node must have at least one connection to save successfully.
                    </p>
                </div>
            ),
        },
        {
            selector: '.react-flow__node',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">🔗 Node Connections</h3>
                    <p className="text-gray-700 mb-2">
                        Each node has connection handles (dots) on the left and right sides:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>➡️ <strong>Right handle:</strong> Outgoing connection (source)</li>
                        <li>⬅️ <strong>Left handle:</strong> Incoming connection (target)</li>
                        <li>🎯 <strong>Rule:</strong> Each node can have only one outgoing connection</li>
                    </ul>
                </div>
            ),
        },
        {
            selector: '.react-flow__panel',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">📸 Export Workflow</h3>
                    <p className="text-gray-700 mb-2">
                        Use the "Download Image" button to export your workflow as a PNG image.
                    </p>
                    <p className="text-sm text-gray-600">
                        🖼️ <strong>Feature:</strong> Perfect for sharing your workflow designs with your team!
                    </p>
                </div>
            ),
        },
        {
            selector: '.main-flow',
            content: (
                <div className="p-4">
                    <h3 className="text-lg font-bold text-[#FFAD5E] mb-2">🎉 You're All Set!</h3>
                    <p className="text-gray-700 mb-2">
                        You now know how to use the Workflow Builder! Here's a quick summary:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>📦 <strong>Drag nodes</strong> from the sidebar to the canvas</li>
                        <li>🔗 <strong>Connect nodes</strong> by dragging between handles</li>
                        <li>✏️ <strong>Edit content</strong> by clicking on nodes</li>
                        <li>💾 <strong>Save workflow</strong> when ready</li>
                        <li>📸 <strong>Export as image</strong> to share</li>
                    </ul>
                    <p className="text-sm text-[#FFAD5E] mt-3 font-semibold">
                        🚀 Start building your first workflow now!
                    </p>
                </div>
            ),
            position: 'center' as const,
        },
    ];

    return (
        <TourProvider
            steps={steps}
            showNavigation={true}
            showBadge={true}
            showDots={true}
            disableInteraction={false}
            disableDotsNavigation={false}
            onClickMask={({ setIsOpen }) => setIsOpen(false)}
            styles={{
                popover: (base) => ({
                    ...base,
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    border: '2px solid #FFAD5E',
                }),
                badge: (base) => ({
                    ...base,
                    background: '#FFAD5E',
                    color: 'white',
                }),
                controls: (base) => ({
                    ...base,
                    color: '#FFAD5E',
                }),
                arrow: (base) => ({
                    ...base,
                    color: '#FFAD5E',
                }),
            }}
        >
            {children}
            <TourContent />
        </TourProvider>
    );
};

export default WorkflowTour; 