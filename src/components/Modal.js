import React, { Component } from 'react'
import './Modal.css';

export class Modal extends Component {
  render() {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    
    let date= this.props.release_date
            let year = date.substring(0,4);
            let month = date.substring(5,7);
            let day = date.substring(8,10);

            const months = {
                '01' : 'January',
                '02' : 'February',
                '03' : 'March',
                '04' : 'April',
                '05' : 'May',
                '06' : 'June',
                '07' : 'July',
                '08' : 'August',
                '09' : 'September',
                '10' : 'October',
                '11' : 'November',
                '12' : 'December'
            }

    let ans = day + ' ' + months[month] + ' , ' + year;
    return (
        <>

                    <div className="modal">
                        <div className="modal-content">
                            <h3>{this.props.title}</h3>
                            <i className='fa fa-close' onClick={this.props.hide}/>
                            <div className="movie-img"> <img src={IMG_URL + this.props.poster_path} alt={this.props.title}/></div>
                           <div className="modal-main-content"><span><strong>Release Date</strong> : {ans} </span>
                            <p>{this.props.overview}</p>
                            <div className="modal-rating"><span><strong>{this.props.vote_average}</strong> / 10 ({this.props.vote_count} total counts)</span></div> </div>
   
                        </div>
                    </div>
                
        </>
    )
  }
}

export default Modal
