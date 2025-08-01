import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { API_BASE_URL } from "@/constant";

export default function UserSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
    avatar: "",
  });

  console.log("signup render");

  const [avatar, setAvatar] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }, []);

  const handleAvatarChange = useCallback((e) => {
    setAvatar(e.target.files[0]);
  }, []);

  const signup = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('email', user.email);
      formData.append('password', user.password);
      formData.append('username', user.username);
      formData.append('fullname', user.fullname);

      const response = await axios.post(
        `${API_BASE_URL}/api/v1/users/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);
      dispatch(login({ username: user.username, password: user.password }));
      navigate("/");
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error: " + error);
      toast.error("Error while signing up");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0 &&
      user.fullname.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-screen pt-16">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  id="username"
                  placeholder="Max"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input
                  name="fullname"
                  value={user.fullname}
                  onChange={handleInputChange}
                  id="fullname"
                  placeholder="Robinson"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                value={user.email}
                onChange={handleInputChange}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                value={user.password}
                onChange={handleInputChange}
                id="password"
                type="password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="avatar">Avatar</Label>
              <Input
                onChange={handleAvatarChange}
                id="avatar"
                type="file"
              />
            </div>
            <Button onClick={signup} type="submit" className="w-full">
              {buttonDisabled
                ? "Fill the form"
                : loading
                  ? "Loading"
                  : "Create an account"}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
