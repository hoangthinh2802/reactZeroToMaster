
import React, { Component} from "react"
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import {withStyles} from "@material-ui/styles"
import styles from "./styles/PaletteStyle"



class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorID)
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this)
        // this.gatherShades = this.gatherShades.bind(this)
    }
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors

        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }
    changeFormat(val) {
        this.setState ({format: val})
    }
    render() {
        const {format} = this.state
        const {classes} = this.props
        const {paletteName, emoji, id} = this.props.palette
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color.[format]} showingFullPalette={false} />
        ))
        
        return (
            
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
               
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
export default withStyles(styles) (SingleColorPalette)