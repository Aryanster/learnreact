import data from "./data.json";
const PeopleCard = ({NAME,EMAIL,PHONENUMBER,FAVORITEFOOD}) => {
    return (
        <div className="people-card">
            <h1>{NAME}</h1>
            <h2>{EMAIL}</h2>
            <h2>{PHONENUMBER}</h2>
            <h2>{FAVORITEFOOD}</h2>
        </div>
    )
}

const Body = () => {
    return (
        <div className="container-body">
            {
                data.map((dataItem) => {
                    return (
                        <PeopleCard {...dataItem} />
                    );
                })
            }
        </div>
    );
}



export default Body;