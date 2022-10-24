import React from "react"
import './index.css'

export default function Home() {

    function hello() {
        const rand_int = Math.floor(Math.random() * 10)
        console.log("Greeting number " + rand_int)
        switch (rand_int) {
            case 1:
                return "Salutations!"
            case 2:
                return "Hi!"
            case 3:
                return "Howdy!"
            case 4:
                return "Greetings!"
            default:
                return "Hello!"
        }
    }
    return (
        <div id="content">
            <h1>{hello()}</h1>
            <p>My name is Bill Horvath (William Horvath II, technically.) Whether you know me already or not, here’s where you can see what I’ve been up to lately:</p>
                <ul>
                    <li><a href="https://bhii.ink" target="_blank" rel="noreferrer">BHII.ink</a><span>My artwork.</span></li>
                    <li><a href="https://GitHub.billhorvath.com">GitHub</a><span>My code.</span></li>
                    <li><a href="https://LinkedIn.billhorvath.com">LinkedIn</a><span>My professional history.</span></li>
                    <li><a href="https://Twitter.billhorvath.com">Twitter</a><span>My thoughts.</span></li>
                    <li><a href="https://Facebook.billhorvath.com">Facebook</a><span>My friends and I.</span></li>
                    <li><a href="https://Instagram.billhorvath.com">Instagram</a><span>My photos.</span></li>
                    <li><a href="https://StackOverflow.billhorvath.com">StackOverflow</a><span>My answers.</span></li>
                </ul>
            <p>Thanks for stopping by!</p>
            <p className="tagline">Photo: Me in front of <a href="https://johnbucherartist.com/faces/">John Bucher’s Faces</a>. Photo credit: <a href="https://watchowlmedia.org/photo" >Taylor Houpt</a>.</p>
        </div>
    )
}