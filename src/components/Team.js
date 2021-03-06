import React from 'react'
import Sectitle from './Title/Sectitle';
import Teamitem from './Teamitem';

function Team() {
    return (
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Phillip Anthropy" memberd="web designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Gordon Norman" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Dylan Meringue" memberd="web designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="Bailey Wonger" memberd="Marketer"/>
                    </div>
                   
                   
                </div>
            </div>
        </section>
    )
}

export default Team
