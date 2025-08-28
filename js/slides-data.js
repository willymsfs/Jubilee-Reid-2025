// Slides data
const slidesData = [
  // Slide 1: Title Slide
  {
    id: 'title-slide',
    className: 'title-slide',
    content: `
      <div class="slide-inner flex flex-col justify-center items-center text-center">
        <div class="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 class="mb-6">Pilgrims of Hope</h1>
          <h2 class="mb-8">A Biblical Reflection - Jubilee 2025</h2>
          <p class="text-2xl mb-4"></p>
          <p class="text-xl"></p>
          <p class="text-xl"></p>
          <p class="text-xl"></p>
        </div>
        <img src="images/jubilee_logo2.jpg" alt="Jubilee 2025 Logo" class="logo">
      </div>
    `
  },
  
  // Slide 2: Welcome and Introduction to Jubilee Year
  {
    id: 'welcome-jubilee',
    content: `
      <div class="slide-inner">
        <h1>Welcome and Introduction to Jubilee Year</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">The Jubilee is a <span class="accent font-bold">sacred time of celebration, renewal, and grace</span>. We are called to immerse ourselves more deeply in our faith through:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Sacraments</li>
              <li>Pilgrimages</li>
              <li>Acts of mercy</li>
              <li>Intellectual programming</li>
            </ul>
            
            <p class="mb-4">Pope Francis inaugurated this Holy year, inviting us to become <span class="accent font-bold">Pilgrims of Hope</span>.</p>
            
            <blockquote class="border-l-4 border-accent pl-4 italic">
              "We must fan the flame of hope that has been given us and help everyone to gain new strength and certainty by looking to the future with an open spirit, a trusting heart and farsighted vision."
            </blockquote>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/holy_door3.jpg" alt="Holy Door at Vatican">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 3: Pope Francis's Invitation
  {
    id: 'pope-francis-invitation',
    content: `
      <div class="slide-inner">
        <h1>Pope Francis's Invitation: Pilgrims of Hope</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">In his papal bull <span class="accent font-bold">"Spes non confundit"</span> (Hope Does Not Disappoint), Pope Francis invites us to become Pilgrims of Hope during the Jubilee Year 2025.</p>
            
            <div class="quote-box mb-6">
              <p class="italic">"Hope is also the central message of the coming Jubilee that, in accordance with an ancient tradition, the Pope proclaims every twenty-five years."</p>
            </div>
            
            <p class="mb-4">Pope Francis emphasizes three key attitudes for pilgrims:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>An <span class="accent font-bold">open spirit</span> - receptive to God's grace</li>
              <li>A <span class="accent font-bold">trusting heart</span> - confident in God's mercy</li>
              <li>A <span class="accent font-bold">farsighted vision</span> - looking beyond present difficulties</li>
            </ul>
            
            <p>These words challenge and inspire us to restore a climate of hope and trust in our world.</p>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/pope_pilgrims1.jpeg" alt="Pope Francis with Pilgrims">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 4: Official Beginning of Jubilee
  {
    id: 'jubilee-beginning',
    content: `
      <div class="slide-inner">
        <h1>Official Beginning of Jubilee</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-6">The Jubilee officially began with ceremonial openings at both the Vatican and in local dioceses:</p>
            
            <div class="timeline mb-6">
              <div class="timeline-item">
                <div class="timeline-date">December 24</div>
                <div>Pope Francis opened the Holy Doors at the Vatican</div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-date">January 29</div>
                <div>Bishop Walkowiak processed with hundreds of parishioners into the cathedral to begin the Grand Rapids pilgrimage of Hope</div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-date">Throughout 2025</div>
                <div>Monthly intellectual programs at Aquinas College</div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-date">January 6, 2026</div>
                <div>Scheduled closing of the Jubilee Year</div>
              </div>
            </div>
            
            <p>The opening of the Holy Door symbolizes the willingness to follow and be guided by Jesus Christ, the "door" of our salvation.</p>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/holy_door2.jpg" alt="Holy Door Opening Ceremony">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 5: Biblical Origins of Jubilee
  {
    id: 'biblical-origins',
    content: `
      <div class="slide-inner">
        <h1>Biblical Origins of Jubilee</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">The laws about the Jubilee Year can be found in <span class="accent font-bold">Leviticus Chapter 25</span>. It prescribes that the Jubilee year is to occur every 50th year.</p>
            
            <p class="mb-4">Three key actions were required during the Jubilee:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>All Israelite slaves are to be freed</li>
              <li>The land was to lie fallow</li>
              <li>All ancestral lands that had been sold were to be redeemed by their original owners</li>
            </ul>
            
            <div class="quote-box">
              <p class="italic">"Let the trumpet resound throughout the land. This 50th year you shall make sacred by proclaiming liberty in the land for all its inhabitants."</p>
              <p class="text-right">- Leviticus 25:9-10</p>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/leviticus_25_10.jpg" alt="Leviticus 25:10 Scripture">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 6: Economic Realities in Ancient Israel
  {
    id: 'economic-realities',
    content: `
      <div class="slide-inner">
        <h1>Economic Realities in Ancient Israel</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">Most people in ancient Israel lived with very little economic security. Even when a family owned land, they were always in danger of falling into an escalating cycle of debt.</p>
            
            <div class="quote-box mb-6">
              <p>All it took was a drought, a war, or a pestilence that could destroy crops and devastate harvests, causing families to borrow to plant crops the following year.</p>
            </div>
            
            <p class="mb-4">When debts could not be met, families had three options:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li><span class="accent font-bold">Sell their land</span> - losing their means of livelihood and self-sufficiency</li>
              <li><span class="accent font-bold">Become day laborers</span> - facing daily uncertainty about work and income</li>
              <li><span class="accent font-bold">Indenture themselves as slaves</span> - the worst case scenario, until debts were met</li>
            </ul>
            
            <p>The Jubilee year was designed to break this cycle of poverty and restore economic balance.</p>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/leviticus_field.jpg" alt="Ancient Israel Agricultural Field">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 7: The Parable of the Workers in the Vineyard
  {
    id: 'vineyard-parable',
    content: `
      <div class="slide-inner">
        <h1>The Parable of the Workers in the Vineyard</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">Jesus tells a parable in <span class="accent font-bold">Matthew 20:1-16</span> that illustrates the precarious life of day laborers:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>A vineyard owner hires workers throughout the day</li>
              <li>He hires five different crews, the last at 5:00 PM</li>
              <li>At the end of the day, all workers receive the same wage - one denarius</li>
              <li>Those who worked all day complain about equal pay</li>
            </ul>
            
            <div class="quote-box">
              <p class="italic">"These last worked only one hour, and you have made them equal to us who have borne the burden of the day in the scorching heat."</p>
              <p class="italic mt-2">"Friend, I am doing you no wrong. Did you not agree with me for a denarius? Take what belongs to you and go. I choose to give to this last the same as I give to you."</p>
              <p class="text-right">- Matthew 20:12-14</p>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/laborers_vineyard.jpg" alt="Parable of the Laborers in the Vineyard">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 8: Different Perspectives on the Parable
  {
    id: 'perspectives-parable',
    content: `
      <div class="slide-inner">
        <h1>Different Perspectives on the Parable</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">A journey in understanding this parable from different perspectives:</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Initial Discomfort:</h3>
              <p>As a lifelong Catholic working in the "vineyard of the Lord," she identified with those who worked all day and expected more compensation.</p>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Grandfather's Conversion:</h3>
              <p>Her grandfather received sacraments on his deathbed, like workers hired at the last hour. A priest compared this to travelers who board a train at different times but reach the same destination.</p>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Single Mother's Perspective:</h3>
              <p>A single mother with no education or marketable skills identified with the day laborers who desperately needed work. For her, the denarius represented the ability to feed her family.</p>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/workers_vineyard.jpg" alt="Workers in the Vineyard">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 9: Historical Timeline of Jubilee Years
  {
    id: 'jubilee-timeline',
    content: `
      <div class="slide-inner">
        <h1>Historical Timeline of Jubilee Years</h1>
        
        <div class="content mb-6">
          <p>The tradition of Jubilee years in the Catholic Church dates back to 1300 when Pope Boniface VIII instituted the first Holy Year. Initially celebrated every 100 years, then every 50 years, and now every 25 years.</p>
        </div>
        
        <div class="chart-container">
          <canvas id="timelineChart"></canvas>
        </div>
      </div>
    `
  },
  
  // Slide 10: Ordinary and Extraordinary Jubilees
  {
    id: 'jubilee-types',
    content: `
      <div class="slide-inner">
        <h1>Ordinary and Extraordinary Jubilees</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">The Catholic Church celebrates two types of Jubilee years:</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Ordinary Jubilees:</h3>
              <p>Celebrated every 25 years according to the established calendar cycle.</p>
              <p class="mt-2">Examples: 2000 (Great Jubilee), 2025 (Pilgrims of Hope)</p>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Extraordinary Jubilees:</h3>
              <p>Proclaimed by the Pope for special occasions outside the regular cycle.</p>
              <p class="mt-2">Examples: 2015 (Year of Mercy), 1983 (Redemption)</p>
            </div>
            
            <p>Each Jubilee has a specific theme that guides the spiritual focus of the celebration.</p>
          </div>
          
          <div class="column">
            <div class="chart-container">
              <canvas id="jubileeTypesChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 11: Biblical Foundations of Hope
  {
    id: 'biblical-hope',
    content: `
      <div class="slide-inner">
        <h1>Biblical Foundations of Hope</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">Hope is a central theme throughout Scripture, providing the foundation for the Jubilee 2025 theme "Pilgrims of Hope":</p>
            
            <div class="mb-4">
              <h3 class="text-xl font-bold text-accent mb-2">Old Testament:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11)</li>
                <li>"But those who hope in the LORD will renew their strength." (Isaiah 40:31)</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h3 class="text-xl font-bold text-accent mb-2">New Testament:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>"And hope does not disappoint us, because God's love has been poured into our hearts through the Holy Spirit that has been given to us." (Romans 5:5)</li>
                <li>"May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit." (Romans 15:13)</li>
              </ul>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/jubilee_hebrew.png" alt="Biblical Jubilee Concept">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 12: Pope Francis's Message on Pilgrims of Hope
  {
    id: 'pope-message',
    content: `
      <div class="slide-inner">
        <h1>Pope Francis's Message on Pilgrims of Hope</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">In his papal bull "Spes non confundit" (Hope Does Not Disappoint), Pope Francis outlines key aspects of hope:</p>
            
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li><span class="accent font-bold">Hope Born of Love:</span> Springing from the pierced heart of Jesus on the cross</li>
              <li><span class="accent font-bold">Holy Spirit's Role:</span> Illuminates believers with the light of hope, keeps it burning</li>
              <li><span class="accent font-bold">Certainty of Hope:</span> Nothing can separate us from God's love (Romans 8:35-39)</li>
              <li><span class="accent font-bold">Hope Amidst Suffering:</span> Suffering produces endurance, endurance produces character, character produces hope</li>
              <li><span class="accent font-bold">Patience:</span> A virtue closely linked to hope, essential in our fast-paced world</li>
            </ul>
            
            <div class="quote-box">
              <p class="italic">"For everyone, may the Jubilee be a moment of genuine, personal encounter with the Lord Jesus, the 'door' of our salvation."</p>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/pope_pilgrims2.png" alt="Pope Francis with Pilgrims">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 13: Theme of Faith in the Jubilee Year
  {
    id: 'faith-theme',
    content: `
      <div class="slide-inner">
        <h1>Theme of Faith in the Jubilee Year</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-6">The Jubilee Year offers a profound opportunity for deepening personal and communal faith:</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Deepening Personal Faith:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Renewed commitment to prayer and Scripture reading</li>
                <li>Personal reflection on one's relationship with God</li>
                <li>Spiritual growth through pilgrimage experiences</li>
              </ul>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Role of Sacraments:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Reconciliation as a channel of grace and renewal</li>
                <li>Eucharist as nourishment for the journey of faith</li>
                <li>Sacraments as tangible encounters with Christ</li>
              </ul>
            </div>
            
            <p>Faith is not merely an intellectual exercise but a lived experience that transforms our relationship with God and others.</p>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/jubilee_logo3.jpg" alt="Jubilee Faith Theme">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 14: Theme of Mercy in the Jubilee Year
  {
    id: 'mercy-theme',
    content: `
      <div class="slide-inner">
        <h1>Theme of Mercy in the Jubilee Year</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">The current Jubilee of Hope builds upon the foundation laid by the Extraordinary Jubilee of Mercy proclaimed by Pope Francis in 2015.</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Continuation from 2015:</h3>
              <p>Mercy remains a core theme, emphasizing God's boundless compassion and the call for believers to extend mercy to others.</p>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Acts of Charity and Forgiveness:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Corporal Works of Mercy: Feeding the hungry, sheltering the homeless, etc.</li>
                <li>Spiritual Works of Mercy: Counseling the doubtful, comforting the afflicted, etc.</li>
                <li>Forgiveness: Both seeking and granting, promoting reconciliation</li>
              </ul>
            </div>
            
            <p>These acts mirror the biblical concept of debt release in the ancient Jubilee, bringing freedom and restoration.</p>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/works_of_mercy.jpg" alt="Works of Mercy">
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 15: Intellectual Programming in the Jubilee Year
  {
    id: 'intellectual-theme',
    content: `
      <div class="slide-inner">
        <h1>Intellectual Programming in the Jubilee Year</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">Intellectual programming during the Jubilee Year aims to foster a deeper understanding of faith, theology, and the Church's teachings.</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Theological Reflection and Study:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Lectures, seminars, and workshops exploring biblical themes</li>
                <li>Study groups examining Church history and teachings</li>
                <li>Discussions on contemporary issues through a theological lens</li>
              </ul>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Understanding of Faith:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Engaging the minds of believers, encouraging critical thinking</li>
                <li>Exploring the richness of Catholic tradition</li>
                <li>Articulating faith in a way that speaks to modern life</li>
              </ul>
            </div>
            
            <p>Aquinas College is actively hosting intellectual programs throughout the Jubilee Year, demonstrating the practical implementation of this theme.</p>
          </div>
          
          <div class="column">
            <div class="chart-container">
              <canvas id="intellectualProgrammingChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    `
  },
  
  // Slide 16: Being Pilgrims of Hope Today
  {
    id: 'call-to-action',
    content: `
      <div class="slide-inner">
        <h1>Being Pilgrims of Hope Today</h1>
        
        <div class="two-column">
          <div class="column content pr-8">
            <p class="mb-4">As we journey through the Jubilee Year 2025, we are called to be Pilgrims of Hope in our daily lives:</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Reflecting on Ancestors in Faith:</h3>
              <p>Our spiritual ancestors set out as pilgrims of hope with an open spirit, a trusting heart, and a willingness to embrace the unknown with confidence in God.</p>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-accent mb-2">Practical Steps:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Participate in pilgrimages to holy places</li>
                <li>Engage in acts of mercy and charity</li>
                <li>Deepen faith through prayer and sacraments</li>
                <li>Attend intellectual programs to grow in understanding</li>
                <li>Spread hope through witness and service</li>
              </ul>
            </div>
            
            <div class="quote-box">
              <p class="italic">"Through our witness, may hope spread to all those who anxiously seek it."</p>
              <p class="text-right">- Pope Francis</p>
            </div>
          </div>
          
          <div class="column">
            <div class="image-container">
              <img src="images/vineyard_scene.jpeg" alt="Modern Pilgrims of Hope">
            </div>
          </div>
        </div>
      </div>
    `
  }
];

// Chart data for the Intellectual Programming slide
const intellectualProgrammingData = {
  labels: ['Lectures', 'Seminars', 'Workshops', 'Study Groups', 'Panel Discussions'],
  datasets: [{
    label: 'Intellectual Programming Activities',
    data: [30, 25, 20, 15, 10],
    backgroundColor: [
      '#1a3c6e',
      '#8b9dc3',
      '#3b5998',
      '#6a7ea8',
      '#9dacce'
    ],
    borderWidth: 1
  }]
};

