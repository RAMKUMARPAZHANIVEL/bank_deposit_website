import Nav from "./nav"
const Main = _ => {
    return (
       <div className="main-container">
          <Nav />
         <div className="main-section">
            <header>
              <h1>📩</h1>
              <img src="data:image/jpeg;base64,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"/>
             </header>
            <h2>Active Deposits</h2>
            <table>
                <tr>
                    <th>PROPERTY</th>
                    <th>MOVE DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS</th>
                    <th></th>
                  
                </tr>
                <tr>
                <td>771 Lost Round</td>
                    <td>25 February 2020</td>
                    <td>$3000</td>
                    <td>$4400</td>
                    <td>Awarning Bank Processing</td>
                    <td>🟢</td>
                </tr>
                <tr>
                    <td>771 Lost Round</td>
                    <td>25 February 2020</td>
                    <td>$3000</td>
                    <td>$4400</td>
                    <td>Awarning Bank Processing</td>
                    <td>🔴</td>
                </tr>
            </table>
         <div className="button-box">
         <button>ALL ACTIVE DEPOSITS</button>
         </div>
        
        <div >
            <h2>Closed Deposits</h2>
            <table>
                <tr>
                    <th>PROPERTY</th>
                    <th>MOVE DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS</th>
                    <th></th>
                  
                </tr>
                <tr>
                <td>771 Lost Round</td>
                    <td>25 February 2020</td>
                    <td>$3000</td>
                    <td>$4400</td>
                    <td>Awarning Bank Processing</td>
                    <td>🟢</td>
                </tr>
                <tr>
                    <td>771 Lost Round</td>
                    <td>25 February 2020</td>
                    <td>$3000</td>
                    <td>$4400</td>
                    <td>Awarning Bank Processing</td>
                    <td>🔴</td>
                </tr>
            </table>
            <div className="button-box">
            <button>ALL ACTIVE DEPOSITS</button>
            </div>
        </div>
    </div>
       </div>
    )
}

export default Main