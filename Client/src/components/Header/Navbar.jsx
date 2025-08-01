import Container from "../Container";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Ngologout as ngoLogout } from "../../store/NgoAuthSlice";

function Header() {
  const authS = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const ngoStatus = useSelector((state) => state.ngoAuth);
  const authStatus = authS.status;

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Explore Ngo's",
      slug: "/explore-ngo",
      active: true,
    },
    {
      name: "Posts",
      slug: "/post",
      active: true,
    },
    {
      name: "Add Post",
      slug: "/post/create",
      active: authStatus,
    },
    {
      name: "Login / Signup",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register as Ngo",
      slug: "/ngo-login",
      active: !ngoStatus.status,
    },
    {
      name: "Profile",
      slug: `/profile/${authS?.userData?.data?.user?._id}`,
      active: authStatus,
    },
    {
      name: "Profile",
      slug: `/ngo-profile/${ngoStatus?.ngoData?.data?.ngo?._id}`,
      active: ngoStatus.status,
    },
  ];

  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await dispatch(logout()).unwrap();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Couldn't log out");
    }
  };

  const handleNgoLogout = async (e) => {
    e.preventDefault();
    try {
      await dispatch(ngoLogout()).unwrap();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Couldn't log out");
    }
  };

  return (
    <Container>
      <nav className="flex justify-between text-3xl my-2 py-2 ">
        <div>
          <Link to="/">logo</Link>
        </div>
        <ul className="flex justify-between gap-6">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Button variant="default" onClick={() => navigate(item.slug)}>
                  {item.name}
                </Button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <Button variant="default" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          )}
          {ngoStatus.status && (
            <li>
              <Button variant="default" onClick={handleNgoLogout}>
                Logout
              </Button>
            </li>
          )}
          <li className="pt-1">
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <Separator />
    </Container>
  );
}

export default Header;
