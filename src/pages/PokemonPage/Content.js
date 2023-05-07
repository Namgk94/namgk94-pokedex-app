import Pagination from './Pagination';
function Content() {
    // let dataLoading = Loading(FetchAPI());
    return (
        <div className="container-fluid" style={{padding: "20px 0 200px 0"}}>

            <div className="container" >
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>Pokémon</h1>
                <Pagination></Pagination>
            </div>
        </div>

    )
}
export default Content;