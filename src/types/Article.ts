import { FunctionComponent } from 'preact';

export interface Article extends FunctionComponent {
  name: string;
  id: string;
  title: string;
  timestamp: number;
}
