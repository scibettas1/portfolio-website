// import React from "react";
// import "../styles/style.css";


// class ContactSection extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             subject: '',
//             message: ''
//         }
//     }

//     onNameChange(event) {
//         this.setState({name: event.target.value})
//     }

//     onEmailChange(event) {
//         this.setState({email: event.target.value})
//     }

//     onSubjectChange(event) {
//         this.setState({subject: event.target.value})
//     }

//     onMsgChange(event) {
//         this.setState({message: event.target.value})
//     }

//     submitEmail(e){
//         e.preventDefault();
//         axios({
//           method: "POST", 
//           url:"/send", 
//           data:  this.state
//         }).then((response)=>{
//           if (response.data.status === 'success'){
//               alert("Message Sent."); 
//               this.resetForm()
//           }else if(response.data.status === 'fail'){
//               alert("Message failed to send.")
//           }
//         })
// }

// resetForm(){
//         this.setState({name: '', email: '',subject:'', message: ''})
// }


//     render() {
//         return (
//             <div>
//                 <div className="info1">
//                     <div className="container">
//                         <h2 className="my-h2">CONTACT</h2>
//                         <div className="row">
//                             <form id="contact-form" onSubmit={this.submitEmail.bind(this)}
//                                 method="POST">
//                                 <div className="form-group">
//                                     <div className="row">
//                                         <div className="col-md-6">
//                                             <input placeholder="Name" id="name" type="text"
//                                                 className="form-control" required value={this.state.name}
//                                                 onChange={this.onNameChange.bind(this)} />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <input placeholder="Email" id="email" type="email"
//                                                 className="form-control" aria-describedby="emailHelp"
//                                                 required value={this.state.email} onChange=
//                                                 {this.onEmailChange.bind(this)} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <input placeholder="Subject" id="subject" type="text"
//                                         className="form-control" required value={this.state.subject}
//                                         onChange={this.onSubjectChange.bind(this)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <textarea placeholder="Message" id="message"
//                                         className="form-control" rows="1"
//                                         required value={this.state.message}
//                                         onChange={this.onMsgChange.bind(this)} />
//                                 </div>
//                                 <button type="submit" className="view-btn submit">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

//     export default ContactSection;