"use client";
import { useState, useEffect } from "react";
function AppFooter() {
  const [year, setYear] = useState(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="footer__custom">
		
      <footer className="mt-4 d-flex flex-wrap justify-content-between align-items-center p-3 border-top">
	  <div className="col-md-0 d-flex align-items-center">
	  <a>Tất cả nội dung của trang web này đều được tìm kiếm và thu thập ở các trang web phát video trực tuyến chính thống trên Internet, cũng như không cung cấp phát trực tuyến chính hãng.</a>
	  </div>
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-dark fw ">
            © {year ? year : "Loading..."} by PHIMMOI 3GIO
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">          
          <li className="ms-3">
            <a
              className="text-muted fw text-warning"
              href="https://3gio.net"
              target="_blank"
            >
              <i className="fe fe-message-circle"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default AppFooter;




