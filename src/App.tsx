import { useState } from 'react';
import './App.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function App() {
  const name = "Ranjith BADHRI";
  const initials = name[0] + name.split(" ")[1][0];
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showAllCards, setShowAllCards] = useState(false);

  const profiles = [
    { number: 3, department: "Location " },
    { number: 24, department: "Department " },
    { number: 64, department: "Teams " },
    { number: 963, department: "Totalheadcount " },
    { number: 800, department: "Individualcontributes " },
    { number: 100, department: "Managers " },
    { number: 50, department: "Directors " },
    { number: 10, department: "Vice precidents " },
    { number: 3, department: "Cheif Excutive " },
    { number: 84, department: "Active Registations " },
    { number: 12, department: "Active PIP " },
    { number: 5, department: "Internal Mobility Rate", isPercent: true },
    { number: 28.2, department: "Gender Diversity%",  isPercent: true },
    { number: 8, department: "Attritation Rate", isPercent: true  },
    { number: 180, department: "Remote Employees " },
    { number: 42, department: "yet to Join " } , 
    { number: 42, department: "yet to Join " }   
 
    

  ];

  const face = [
    { Name: "Attendance Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 },
    { Name: "Leave Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 },
    { Name: "Attendance Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 },
    { Name: "Leave Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 },
    { Name: "Attendance Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 },
    { Name: "Leave Request", Module: " India", stager1: 82, stager2: 42, stage3: 12 }
  ];
const hand = [
    { Name: "Engineering",  stager1: 430, stager2: 32, stage3: 46 },
    { Name: "Platform Engineering", stager1: 142, stager2: 21, stage3: 16 },
    { Name: "Global customer Care", stager1: 98, stager2: 18, stage3: 19 },
    { Name: "India Design", stager1: 19, stager2: 1, stage3: 1 },
    { Name: "Human Resources", stager1: 21, stager2: 2, stage3: 2 },
    { Name: "Information Technology", stager1: 22, stager2: 4, stage3: 2 }
  ];
   

  const hair = [
    { Name: "Engineering",  stager1: 430, stager2: 32, stage3: 46 },
    { Name: "Platform Engineering", stager1: 142, stager2: 21, stage3: 16 },
    { Name: "Global customer Care", stager1: 98, stager2: 18, stage3: 19 },
    { Name: "India Design", stager1: 19, stager2: 1, stage3: 1 },
    { Name: "Human Resources", stager1: 21, stager2: 2, stage3: 2 },
    { Name: "Information Technology", stager1: 22, stager2: 4, stage3: 2 }
  ];

  return (
    <div className='Container'>
      <div>
        <section>
          <div className='flex'>
            <div className='initials'>{initials}</div>
            <div>
              <h3 className='heading'>Goodmoring, Ranjith Badri!</h3>
              <p>Welcome to your persanalized dashboard <br />01-jan-2025, Wednesday</p>
            </div>
          </div>

          <div className='Droup-down'>
            <div><h4>Overview</h4></div>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">All</option>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="card-grid">
           {(showAllCards ? profiles : profiles.slice(0, 8)).map((item) => (
  <div key={item.department} className="card">
    <div className="department">
      {item.department} 
       <div className="icon-wrapper">
      <ExclamationCircleOutlined className="hover-icon" />
      <span className="hover-message">Phenom</span>
    </div>
     
    </div>
    <div className="number">
      {item.isPercent ? `${item.number}%` : item.number}
    </div>
  </div>
))}

 </div>

          <div className="show-toggle">
            <button onClick={() => setShowAllCards(!showAllCards)} className="show-button">
              {showAllCards ? "Show Less" : "Show All"} v
            </button>
          </div>

          <div className="card-merge">
            <h2 className='top'>Requested to Approve</h2>
            {face.slice(0, showAllCards ? face.length : 3).map((face, index) => (
              <div className="peace" key={index}>
                <div className="left">
                  <div>{face.Name}</div>       
                   <div> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
 {face.Module}</div>
                </div>
                <div className="right">
                  <div className="sub-stage">
                    <div>{face.stager1}</div>
                    <div className='size'>Total headcount</div>
                  </div>
                   <div className="divider" />
                  <div className="sub-stage">
                    <div>{face.stager2}</div>
                    <div className='size'>Serving Notice</div>
                  </div>
                   <div className="divider" />
                  <div className="sub-stage">
                    <div>{face.stage3}</div>
                    <div className='size'>Yet to join</div>
                  </div>
                   <div className="divider" />
                  
                    <h2 className="dots">⋮</h2>

                  </div>
                </div>
              
            ))}
          </div>
          <div className="show-Down">
            <button onClick={() => setShowAllCards(!showAllCards)} className="show-button">
              {showAllCards ? "Show Less" : "Show All"} v
            </button>
            </div>

          
          <div className="card-Approve">
            <h2 className='top'>On leave</h2>
            {hand.slice(0, showAllCards ? hand.length : 6).map((hand, index) => (
              <div className="hand" key={index}>
                <div className="left">
                  <div>{hand.Name}</div>
                </div>
                <div className="right">
                  <div className="sub-stage">
                    <div>{hand.stager1}</div>
                    <div className='size'>Total headcount</div>
                  </div>
                  <div className="divider" />
                  <div className="sub-stage">
                    <div>{hand.stager2}</div>
                    <div className='size'>Serving Notice</div>
                  </div>
                 <div className="divider" />

                  <div className="sub-stage">
                    <div>{hand.stage3}</div>
                    <div className='size'>Yet to join</div>
                  </div>
                   <div className="divider" />

                </div>
              </div>
            ))}
          </div>

          <div className="card-Canclled">
            <h2 className='top'>Head Count</h2>
            {hair.slice(0, showAllCards ? hair.length : 3).map((hair, index) => (
              <div className="hair" key={index}>
                <div className="left">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{hair.Name}</span>
                  </div>
                </div>
                <div className="right">
                  <div className="sub-stage">
                    <div>{hair.stager1}</div>
                    <div className='size'>Total headcount</div>
                  </div>
                   <div className="divider" />
                  <div className="sub-stage">
                    <div>{hair.stager2}</div>
                    <div className='size'>Serving Notice</div>
                  </div>
                   <div className="divider" />
                  <div className="sub-stage">
                    <div>{hair.stage3}</div>
                    <div className='size'>Yet to join</div>
                  </div>
                   <div className="divider" />
                </div>
              </div>
            ))}
          </div>

          <div className="show-Down">
            <button onClick={() => setShowAllCards(!showAllCards)} className="show-button">
              {showAllCards ? "Show Less" : "Show All"} v
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
