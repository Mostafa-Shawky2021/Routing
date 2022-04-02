import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../api/user";
export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser(id).then((user) => {
      setUser(user.data);
    });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.name}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.email}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="d-flex align-items-center mb-3">
                        Project Status
                      </h5>
                      <p>Web Design</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Website Markup</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>One Page</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Mobile Template</p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Backend API</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
