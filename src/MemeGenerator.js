import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.set = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    render() {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}

export default MemeGenerator