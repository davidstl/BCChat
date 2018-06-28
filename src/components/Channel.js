import React, { Component } from 'react';
import './Channel.css';

// Import components
import AddButton from './AddButton';
import PictureWord from './PictureWord'

// Props:
//  channel {id, name, pic}
//  selected
//  onSelected(channel {})
//  onAdd()
//  addText "+"
class Channel extends Component
{
    onSelected(e)
    {
        this.props.onSelected(this.props.channel);
    }

    onAdd(e)
    {
        this.props.onAdd(this.props.channel);
    }

    render()
    {
        return (
            <div className={this.props.selected ? "Channel-selected" : "Channel"} 
                 style={{padding:"0 16px"}} onMouseDown={this.onSelected.bind(this)}>
                {
                    this.props.channel.dirty ? (<div className="DirtyDot" />) : (<div />)
                }
                <PictureWord id={this.props.channel.id} text={this.props.channel.name} url={this.props.channel.pic} />
                {this.props.onAdd ? (<div className="Channel-selected-AddButton"><AddButton onClicked={this.onAdd.bind(this)} addText={this.props.addText} /></div>) : ""}
            </div>
        );
    }
}

export default Channel;
