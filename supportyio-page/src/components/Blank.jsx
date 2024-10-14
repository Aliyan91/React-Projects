import "bootstrap/dist/css/bootstrap.min.css";

export default function Blankpage() {
    return (
        <div class="mx-auto p-2 " style={{ width: "200px",justifyContent:"center"}}>
            {/* <h1 className="position-absolute top-50 start-50 translate-middle">Blank Page</h1> */}
            <div class="card fs-2 fw-semibold" style={{width:"18rem"}}>
                <div class="card-body text-center">
                    Blank Page.
                </div>
            </div>
        </div>
    )
}