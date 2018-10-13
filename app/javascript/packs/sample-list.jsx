import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    }
  }
    addItems() {
      //create a unike key for each new fruit item
      var timestamp = (new Date()).getTime();
      // update the state object
      var object =  this.state.items['todo-' + timestamp ];
      // set the state
      this.setState({ items : this.state.items });
     }

     removeItem() {
      // update the state object
      delete this.state.items[fruitKey];
      // set the state
      this.setState({ fruits : this.state.items });
      //alert(fruitKey);
     }
     render() {
      return (
        <div className="component-wrapper">
          <ToDoList fruits={this.state.fruits} />
          <AddItemsForm addFruit={this.addFruit} />
          <RemoveItemsForm removeFruit={this.removeFruit} fruits={this.state.fruits} />
        </div>
       );
      }
     }

     class ToDoList extends React.Component {
      render() {
        return (
          <div className="container">
            <ul className="list-group text-center">
              {
                Object.keys(this.props.items).map(function(key) {
                  return <li className="list-group-item list-group-item-info">{this.props.items[key]}</li>
                }.bind(this))
              }
            </ul>
           </div>
          );
        }
      }

      class AddItemsForm extends React.Component {
        createItem(e) {
          e.preventDefault();
          //get the fruit object name from the form
          var item = this.refs.itemName.value;
          //call the addFruit method of the App component
          //to change the state of the fruit list by adding an new item
          if(item.length > 0) {
            this.props.addItems(items);
          }
          //reset the form
          this.refs.itemForm.reset();
        }

        render() {
          return(
            <form className="form-inline" ref="itemForm" onSubmit={this.createItems}>
              <div className="form-group">
                <label for="fruitItem">
                  Objective
                  <input type="text" id="fruitItem" className="form-control" placeholder="e.x.lemmon" ref="itemName" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Add Fruit</button>
            </form>
          )

        }
      }


      class RemoveItemForm extends React.Component {
        selectFruittoRemove(e) {
          var item = e.target.value;
          this.props.removeItem(item);
          this.refs.removeItemForm.reset();
        }

        render() {
          return(
            <form className="form-inline" ref="removeItemForm" onChange={this.selectFruittoRemove}>
             <div className="form-group">
              <label for="selectFruit">
                List of objective
                <select id="selectFruit" className="form-control">
                  <option value="">Remove a object</option>
                  {
                    Object.keys(this.props.items).map(function(key) {
                      return <option value={key}>{this.props.items[key]}</option>
                    }.bind(this))
                  }
                </select>
              </label>
              </div>
            </form>
          )

        }
      }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('state'))
});
