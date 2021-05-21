import React,{Component} from 'react';
import { AuthContext } from '../contexts/Authcontext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    render() { 
        return (
        <AuthContext.Consumer>{(authcontext) => (
        <ThemeContext.Consumer>{(themecontext) => {

            const {isLightTheme, light, dark} = themecontext;
            const {isAuthenticated, toggleAuth} = authcontext;
            const theme = isLightTheme ? light : dark;
            
            return(
                <nav style={{background: theme.ui, color: theme.syntax}}>
                    <h1>Context</h1>
                    <div onClick={toggleAuth}>
                        { isAuthenticated ? 'isLoggedIn' : 'isLoggedOut' }
                    </div>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Context</li>
                    </ul>
                </nav> 
            )
        }}
        </ThemeContext.Consumer>)}
        
        </AuthContext.Consumer>
        );
    }
}

export default Navbar;