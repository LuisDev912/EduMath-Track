function GenerateOperation({ onGenerate }: { onGenerate: () => void }) {
    return <button onClick={onGenerate}>Generate</button>
};

export default GenerateOperation;