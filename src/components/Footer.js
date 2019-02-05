import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/adrian-berger-810074142/" className="icon fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/adigladi" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="https://www.instagram.com/adiutaninsta/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:aberger@kth.se" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
