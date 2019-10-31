import { Component, OnInit, Input } from '@angular/core';
import { node } from '../../admin-panel/model/gateway';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node : node
  constructor() { }

  ngOnInit() {
    console.log(this.node);
    
  }

}
