import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 md:p-12">
      <div className="container max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex justify-evenly">
        <div className="space-y-2">
          <h3 className="text-gray-200 font-semibold text-xl">
            About
            </h3>

          <ul className="flex flex-col gap-2">
            <li>
              <Link className="hover:text-gray-200" to="/about">
                Our Mission
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" to="/about">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-200 font-semibold text-xl">Featured NGOs</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Save the Children
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Habitat for Humanity
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Doctors Without Borders
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-200 font-semibold text-xl">
            Featured Donors
          </h3>

          <ul className="flex flex-col gap-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                The Giving Foundation
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Charitable Foundations
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Philanthropic Collective
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-200 font-semibold text-xl">Get Involved</h3>

          <ul className="flex flex-col gap-2">
            <li>
              <Link className="hover:text-gray-200" href="#">
                Donate
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="#">
                Partner with Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 text-center text-sm">
        © 2024 Bridge the gap. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
