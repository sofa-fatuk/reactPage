import PropTypes from 'prop-types'

export const USER_PROP_TYPE = PropTypes.shape({
  avatarUrl: PropTypes.string,
  userName: PropTypes.string,
})

export const TAG_PROP_TYPE = PropTypes.shape({
  value: PropTypes.string,
  color: PropTypes.string,
})

export const TAGS_PROP_TYPE = PropTypes.arrayOf(TAG_PROP_TYPE)

export const NEWS_PROP_TYPE = PropTypes.shape({
  creator: USER_PROP_TYPE,
  createdAt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  tags: TAGS_PROP_TYPE,
})
