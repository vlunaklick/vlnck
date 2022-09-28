export interface Entries {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  estimated: Estimated;
  visible: Visible;
  created: Created;
  description: Description;
  tags: Tags;
  niceUrl: NiceUrl;
  name: Name;
}

export interface Estimated {
  id: string;
  type: string;
  rich_text: any[];
}

export interface Visible {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Created {
  id: string;
  type: string;
  created_time: string;
}

export interface Description {
  id: string;
  type: string;
  rich_text: any[];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: any[];
}

export interface NiceUrl {
  id: string;
  type: string;
  rich_text: any[];
}

export interface Name {
  id: string;
  type: string;
  title: any[];
}
