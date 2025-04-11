function WaffleChart() 
{

      // Name for the visualisation to appear in the menu bar.
      this.name = 'Waffle Chart';

      // Each visualisation must have a unique ID with no special
      // characters.
      this.id = 'waffle-chart';

      // Property to represent whether data has been loaded.
      this.loaded = false;

      this.waffles= [];

      // Preload the data. This function is called automatically by the
      // gallery when a visualisation is added.
        this.preload = function() 
        {
            var self = this;
            this.data = loadTable(
                './data/waffle/finalData.csv', 'csv' , 'header',
              // Callback function to set the value
              // this.loaded to true.
             function(table) 
                {
                self.loaded=true;
              });
          };

      this.layout={
         startX:20, 
         startY:20,
         waffleWidth:200,
         waffleHeight:200,  
         waffleWidthPadding:20,
         waffleHeightPadding:60,
         secondRowPadding:100,
         topPadding:50  
        };

      this.setup = function() 
      {
          var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

          var values= ['Take-away','Cooked from fresh','Ready meal','Ate out','Skipped meal','Left overs'];

          for (var i=0;i < days.length; i++)
              {
                   var w = this.layout.waffleWidth;
                   var h = this.layout.waffleHeight;
                   var boxes_across = 8;
                   var boxes_down =  8;
                   var table= this.data;
                   var columnHeading = days[i];
                    var possibleValues = values;
                  if(i< 4)
                  {
                      var x = this.layout.startX; 
                      x +=(i *(this.layout.waffleWidth + this.layout.waffleWidthPadding));
                      var y = this.layout.startY + this.layout.topPadding;
                      var w = new Waffle(x,y,w,h,boxes_across,boxes_down,table,columnHeading,possibleValues);
                      this.waffles.push(w);
                  }
                  else
                  {
                      var x = this.layout.startX + this.layout.secondRowPadding; 
                       x += ((i-4)*(this.layout.waffleWidth + this.layout.waffleWidthPadding));
                      var y = this.layout.startY + this.layout.waffleHeight + this.layout.waffleHeightPadding + this.layout.topPadding;
                      var w = new Waffle(x,y,w,h,boxes_across,boxes_down,table,columnHeading,possibleValues);
                      this.waffles.push(w);
                  }
            } 
          print(this.waffles);

    };

      this.destroy = function () {};

      this.draw = function () 
      {
          stroke(0);
          if(!this.loaded){
             print('data not yet loaded');
             return;  
          };

          background(255);
          for (var i=0; i<this.waffles.length;i++){
               var w = this.waffles[i];
               w.draw();
               };
          for (var i=0; i<this.waffles.length;i++){
               var w= this.waffles[i];
               w.checkMouse(mouseX,mouseY);
               };
       }; 
    }  

