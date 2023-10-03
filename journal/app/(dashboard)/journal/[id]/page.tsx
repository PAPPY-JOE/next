const EntryPage = ({params}) => {
    // params.id because the page is name id, as in the folder
    return (
        <div>{params.id}</div>
    )
}

export default EntryPage