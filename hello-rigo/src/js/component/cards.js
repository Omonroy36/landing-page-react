import React from "react";

export function Cards(props) {
	let style = {
		width: "18rem"
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="card" style={style}>
						<img src=" " className="card-img-top" alt=" " />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make
							</p>
							<a href=" " className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" style={style}>
						<img src=" " className="card-img-top" alt=" " />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make
							</p>
							<a href=" " className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" style={style}>
						<img src=" " className="card-img-top" alt=" " />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make
							</p>
							<a href=" " className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" style={style}>
						<img src=" " className="card-img-top" alt=" " />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make
							</p>
							<a href=" " className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
