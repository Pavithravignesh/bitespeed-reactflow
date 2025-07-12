import React from 'react';
import { Panel, useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import type { Node } from 'reactflow';
import { toPng } from 'html-to-image';

function downloadImage(dataUrl: string): void {
    const a = document.createElement('a');
    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

const DownloadBtn: React.FC = () => {
    const { getNodes } = useReactFlow();
    const onClick = (): void => {
        // we calculate a transform for the nodes so that all nodes are visible
        // we then overwrite the transform of the `.react-flow__viewport` element
        // with the style option of the html-to-image library
        const nodes = getNodes() as Node[];
        const nodesBounds = getRectOfNodes(nodes);
        const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);

        const viewport = document.querySelector('.react-flow__viewport') as HTMLElement | null;
        if (!viewport) return;

        toPng(viewport, {
            backgroundColor: '#ffffff',
            width: imageWidth,
            height: imageHeight,
            style: {
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
            },
        }).then(downloadImage);
    };

    return (
        <Panel position="top-left">
            <button className="download-btn" onClick={onClick}>
                Download Image
            </button>
        </Panel>
    );
};

export default DownloadBtn;
