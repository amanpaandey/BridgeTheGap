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
import { Ngologin as login } from "../store/NgoAuthSlice";
import { API_BASE_URL } from "@/constant";

export default function NgoSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    ngoEmail: "",
    password: "",
    ngoName: "",
    ngoDescription: "",
    ngoAvatar: "",
    ngoAddress: "",
    ngoRegistrationUniqueId: "",
    ngoPhone: "",
  });

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
      formData.append("ngoAvatar", avatar);
      formData.append("ngoEmail", user.ngoEmail);
      formData.append("password", user.password);
      formData.append("ngoName", user.ngoName);
      formData.append("ngoDescription", user.ngoDescription);
      formData.append("ngoAddress", user.ngoAddress);
      formData.append("ngoRegistrationUniqueId", user.ngoRegistrationUniqueId);
      formData.append("ngoPhone", user.ngoPhone);

      const response = await axios.post(
        `${API_BASE_URL}/api/v1/ngo/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      setLoading(false);
      dispatch(login({ ngoName: user.ngoName, password: user.password }));
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
      user.ngoEmail.length > 0 &&
      user.password.length > 0 &&
      user.ngoName.length > 0 &&
      user.ngoDescription.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-screen pt-8">
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
                <Label htmlFor="username">Name</Label>
                <Input
                  name="ngoName"
                  value={user.ngoName}
                  onChange={handleInputChange}
                  id="username"
                  placeholder="name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullname">Description</Label>
                <Input
                  name="ngoDescription"
                  value={user.ngoDescription}
                  onChange={handleInputChange}
                  id="fullname"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullname">Phone No.</Label>
                <Input
                  name="ngoPhone"
                  value={user.ngoPhone}
                  onChange={handleInputChange}
                  id="phone"
                  placeholder="+91-0123456789"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ngoEmail">Email</Label>
                <Input
                  name="ngoEmail"
                  value={user.ngoEmail}
                  onChange={handleInputChange}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="password">Unique Reg. ID</Label>
              <Input
                name="ngoRegistrationUniqueId"
                value={user.ngoRegistrationUniqueId}
                onChange={handleInputChange}
                id="ngoRegistrationUniqueId"
                
              />
            </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Address</Label>
                <Input
                  name="ngoAddress"
                  value={user.ngoAddress}
                  onChange={handleInputChange}
                  id="address"
                  placeholder="ngoAddress"
                  required
                />
              </div>

            <div className="grid gap-2">
              <Label htmlFor="avatar">Logo</Label>
              <Input onChange={handleAvatarChange} id="avatar" type="file" />
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
            <Link to="/ngo-login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
