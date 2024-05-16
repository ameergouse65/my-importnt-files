import React from 'react';

function Trainer(props) {
    const cellStyle = {
        border: '2px solid #ddd', 
        padding: '8px', 
   
    };

    const checkboxStyle = {
        marginRight: '5px', 
    };

    const imageStyle = {
        borderRadius: '50%', 
    };

 
    return (
        <tr>
            <td style={cellStyle}>
                <input 
                    type="checkbox" 
                    id={`trainer-${props.id}`} 
                    style={checkboxStyle} 
                    checked={props.checked}  
                    onChange={() => props.handleCheckboxChange(props.id)}  
                />
                <label htmlFor={`trainer-${props.id}`} className="tick_mark">
                        <div className="tick_mark_before"></div>
                        <div className="tick_mark_after"></div>
                    </label>    </td>


                    
            <td style={cellStyle}>{props.id}</td>
            <td style={cellStyle}>{props.name}</td>
            {/* <td style={cellStyle}>{props.dob}</td> */}
            <td style={cellStyle}>{props.gender}</td>
            <td style={cellStyle}>{props.phoneNumber}</td>
            <td style={cellStyle}>{props.email}</td>
            {/* <td style={cellStyle}>{props.pan}</td> */}
            {/* <td style={cellStyle}>{props.adharNumber}</td> */}
            {/* <td style={cellStyle}>{props.address}</td> */}
            <td style={cellStyle}>{props.experience}</td>
            <td style={cellStyle}>{props.qualification}</td>
            <td style={cellStyle}>{props.skill}</td>
            <td style={cellStyle}>{props.designation}</td>
            {/* <td style={cellStyle}>{props.bloodGroup}</td> */}
            <td style={cellStyle}>{props.dateofJoining}</td>
            {/* <td style={cellStyle}>{props.ctc}</td> */}
            {/* <td style={cellStyle}>{props.accountNumber}</td>
            <td style={cellStyle}>{props.ifscCode}</td>
            <td style={cellStyle}>{props.branch}</td>
            <td style={cellStyle}>{props.socialId}</td> */}
            <td style={cellStyle}>
                {props.image && (
                    <img 
                        style={{...imageStyle, display: 'block', maxWidth: '100%', height: 'auto'}}
                        src={`data:image/png;base64,${props.image}`} 
                        alt={`${props.name} - Image`} 
                        width="50" 
                        height="50" 
                    />
    )}
</td>
        
        </tr>
    );
}

export default Trainer;
