const BleetContainer = (props) => {
    return (
        <div className="bg-white max-w-lg mx-auto my-8 border border-gray-500">
            { props.children }
        </div>
    );
};

export default BleetContainer;
