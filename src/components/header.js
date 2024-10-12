"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
function Header() {
    return (<div className="header">
           
        <ul className="header-buttons">
            
       <li className="mywebsiteheading">
        
        Aspiring AI Enthusiast </li>
        
        
            <link_1.default href={"/"}>
            <li>
                Home
            </li>
            </link_1.default>
            <link_1.default href={"/about-us"}>
             <li>
                About us
             </li>
             </link_1.default>
             <link_1.default href={"/contact-us"}>
             <li>
                
                Contact us
             </li>
             
             
             </link_1.default>
             <link_1.default href={"/jobs"}>
            <li>
                Jobs
            </li>
            </link_1.default>
        </ul>
        </div>);
}
exports.default = Header;
