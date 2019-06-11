import { Name } from './name';
import { Location } from "./location";
import { Login } from './login';
import { DOB } from './dob';
import { Registered } from './registered';
import { ID } from './id';
import { Picture } from './picture';

export interface Result {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DOB;
    registered: Registered
    phone: string
    cell: string
    id: ID
    picture: Picture
    nat: string
}