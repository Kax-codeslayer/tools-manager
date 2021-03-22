<template>



<div class="text-center">
    <div id="navi">

    
      <b-card>
     <b-row> 
       <b-col cols="4">  
<b-navbar-brand>
 
   <b-icon icon ="star"></b-icon>
       </b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit"> <b-icon name="flag"></b-icon> Reply</b-button></b-navbar-brand>
    
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Forward</b-button></b-navbar-brand>
    <b-navbar-brand><b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Close</b-button></b-navbar-brand>
       </b-col>
       <b-col>
         </b-col>
       <b-col cols="3">
 <router-link to="/ticket" class ="iterms"> <b-icon icon="x-circle" scale="1.5" variant="danger" id="back" v-b-popover.hover="'Exit'"></b-icon></router-link>
    </b-col>
     </b-row>
      </b-card>
</div>

    <b-row id="ket">
      <div id="ticket">
    <b-col cols="">
        <b-row>
            <b-col cols="3" >
<b-icon icon="envelope"></b-icon>
            </b-col>

            <b-col>
                <h5> Car is offline</h5>
                </b-col>
        </b-row>

 <b-row>
            <b-col cols="3">
 <span class="badge badge-success">C</span>
            </b-col>

            <b-col cols="">
                 kikie c    via email 
                <p><i>14 days ago</i></p>
                </b-col>
        </b-row>

        <b-row>
            <b-col cols="3">
<b-icon icon="envelope"></b-icon>
            </b-col>

            <b-col>
               <p><i>Heey There</i></p>
 <p> My car has been oofline for days now and i havent been receiving my my reports. </p> 
           <p><i>Regards</i></p>Kikie
                </b-col>
        </b-row>


    </b-col>
    </div>
    
    <div id="res">
    <b-col cols="" >
<div>
    
    <h5>Open</h5>
    FIRST RESPONSE DUE
    <P> <small><b-icon icon="clock" animation="spin" font-scale="1" shift-v="6"></b-icon>  by 20 April 2020,10:00</small></P></div>
    <div>
    
    RESOLUTION  DUE  <i>Edit</i>
   <p> <small> <b-icon icon="clock" animation="spin" font-scale="1" shift-v="6"></b-icon>  by 20 April 2020,10:00</small></p></div>
    <hr>
  



    </b-col>
    </div>
    <b-col cols="">

<div id="cad">
  
    <b-card
      header="Contact Details"
      header-tag="header"
       
      
    >
      <b-card-text>
      <b-row>
          <b-col cols="3">
              <span class="badge badge-success" >C</span>
          </b-col>
         
          <b-col id="na">
              <p> Chris</p>

              <i><small>Email</small></i>
               Kikie@itrack.com
              </b-col>
      </b-row>
    
      </b-card-text>
      <b-button href="#" variant="success">view contact</b-button>
    </b-card>
</div>

    </b-col>
        </b-row>
</div>
</template>


<script>
export default {
  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      option: ['Open', 'Closed', 'Pending', 'Resolved', 'Waiting on Customer']
    }
  }
}
</script>
<style>
#ticket{
  background: white;
  margin-right: 2px;
  text-align: left;
}

#res{
  background: white;
  text-align: left;
  height: 70vh;
  overflow-y: scroll;

}

#ticket:hover{
  transform: scale(0.9);
  
}
#ket{
  margin-top: 10px;
}
#navi{

  background-color: white;
}#na{
  text-align: left;
}
#na:hover{
   transform: scale(1.1);
}
#back{
  margin-left: 98%;
  margin-top: 2px;
}
</style>