//Instructions
            //1: Create a list of the top 3 quarterbacks in football according to you
            
            /*to accomplish this task, I have an input field text box, but I need
            to create a button element. Add a click event listener to the button. And then add
            the value of the input text box to the html page. I will set up list structure and append it to the input value. This way someone could add dan marino or jo montana*/
            let qbs = 0;
            const button = document.createElement('BUTTON');
            button.textContent = 'Add Your Top 3 QBs';
            document.getElementById('qb').appendChild(button);

            button.addEventListener('click', () => {
                true;
                let ul = document.getElementsByTagName('ul')[0];
                let li =document.createElement('li');
                li.textContent = addItemInput.value;
                ul.appendChild(li);
                attachListItemButton(li);
                addItemInput.value = ' ';
                console.log(li);
                qbs++;
                console.log(qbs);
            })
            
        
            //decided to add some functionality buttons to the dom so the user can adjust where their favorite qb should be
            const listDiv = document.querySelector('.qb');
            const listUl = listDiv.querySelector('ul');
            const addItemInput = document.querySelector('input.addItemInput');
            
            function attachListItemButton(li) {
                let up = document.createElement('button')
                let down = document.createElement('button')
                let remove = document.createElement('button')
                
                up.className = 'up';
                up.textContent = 'Move QB UP';
                li.appendChild(up);
                
                down.className = 'down';
                down.textContent = 'Move QB DOWN';
                li.appendChild(down);
                
                remove.className = 'remove';
                remove.textContent = 'Take Him Out';
                li.appendChild(remove);
              }
              
              listUl.addEventListener('click', (event) => {
                if (event.target.tagName == 'BUTTON') {
                  if (event.target.className == 'remove') {
                   let li = event.target.parentNode;
                   let ul = li.parentNode;
                   ul.removeChild(li);
                  }
                }
            
                  if (event.target.className == 'up') {
                   let li = event.target.parentNode;
                   let prevLi = li.previousElementSibling;
                   let ul = li.parentNode;
                   if(prevLi) { 
                   ul.insertBefore(li, prevLi);
                   }
                  }  
                   if (event.target.className == 'down') {
                   let li = event.target.parentNode;
                   let nextLi = li.nextElementSibling;
                   let ul = li.parentNode;
                   if(nextLi) { 
                   ul.insertBefore(nextLi, li);
                  }
                }; 

              });
                
              //trying to remove event listener from click so users can't add more than 3 qbs
              /*for(let i = 0; i <= li.length; i++) {
                if (qbs > 3) {
                    button.removeEventListener('click', () => {
                    let p = document.textContent = 'too many qbs';   
                    })*/
                
                //2: Rearrange the best running backs in the league to reverse their order
                //get list items as a node list
            const rbList = document.querySelector('#rbList');
                //convert ul items to an array
            let rbArray = Array.prototype.slice.call(rbList);
            rbArray.push(' Alvin Kamara', ' Saquon Barkley', ' Ezekiel Elliott');
            console.log(rbArray);
            
                //reverse order of rbArray
            rbArray.reverse();
            console.log(rbArray);
                //supply text to the DOM
            rbList.textContent = "Here is the reversed order of Running Backs: " + rbArray;
            console.log(rbList);
            let odds = document.getElementsByClassName('odds');
            let h2Heading = document.createElement('h2');
            h2Heading.textContent = 'Vegas Odds For Winning the SuperBowl';
            //h2Heading.appendChild(h2Heading);
            document.body.appendChild(h2Heading);
            //document.getElementById("odds").appendChild(h2Heading);  
            //3: Find Vegas odds online for the three superbowl favorites and include these odds next to the list
            //New England Patriots 7/1
            let patriots = document.getElementById('newEngland').textContent = '7/1, Patriots';
            //Kansas City Chiefs 8/1
            let chiefs = document.getElementById('kansasCity').textContent = '8/1, Chiefs';
            //New Orleans Saints 9/1
            let saints = document.getElementById('newOrleans').textContent = '9/1, Saints';         
            
            //4: Change the color of each entry on the page to reflect the team represented
            let patriotsColor = document.getElementById('blue').style.backgroundColor = '#002244';
            patriotsColor += document.getElementById('blue').style.color = '#B0B7BC';

            let chiefsColor = document.getElementById('red').style.backgroundColor = '#E31837';
            chiefsColor += document.getElementById('red').style.color = '#FFB81C';

            let saintsColor = document.getElementById('black').style.backgroundColor = '#101820';
            saintsColor += document.getElementById('black').style.color = '#D3BC8D';