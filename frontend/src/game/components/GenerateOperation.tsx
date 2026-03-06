function GenerateOperation({ onGenerate }: { onGenerate: () => void }) {
    return <button type="button" onClick={onGenerate}>Generate</button>
};

export default GenerateOperation;