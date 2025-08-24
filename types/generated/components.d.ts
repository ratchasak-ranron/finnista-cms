import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCourseChapter extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_chapters';
  info: {
    displayName: 'Course Chapter';
  };
  attributes: {
    description: Schema.Attribute.String;
    materials: Schema.Attribute.Component<'shared.course-material', true>;
    name: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'shared.course-video', true>;
  };
}

export interface SharedCourseMaterial extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_materials';
  info: {
    displayName: 'Course Material';
  };
  attributes: {
    fileSizeMb: Schema.Attribute.Decimal;
    materialLink: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedCourseVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_videos';
  info: {
    displayName: 'Course Video';
  };
  attributes: {
    durationMin: Schema.Attribute.Decimal;
    name: Schema.Attribute.String;
    videoLink: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.course-chapter': SharedCourseChapter;
      'shared.course-material': SharedCourseMaterial;
      'shared.course-video': SharedCourseVideo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
