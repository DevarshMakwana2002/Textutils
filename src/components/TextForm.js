import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Convert to UpperCase</button>
        </div>
    )
}
