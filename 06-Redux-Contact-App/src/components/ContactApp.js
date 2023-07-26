import React from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

let ContactApp = ()=>{
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-info">Contact App</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum similique doloribus reiciendis molestiae, voluptates odio tenetur cumque facilis corporis? Nemo, recusandae eos necessitatibus corrupti illum quasi commodi suscipit aut cumque?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ContactList/>
                        </div>
                        <div className="col-md-3">
                            <ContactCard/>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
export default ContactApp;