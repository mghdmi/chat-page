import React, { useLayoutEffect, useRef } from 'react';

function ChatScroller(props) {
	const ref = useRef();
	const shouldScrollRef = useRef(true);

	useLayoutEffect(() => {
		if (shouldScrollRef.current) {
			const node = ref.current;
			node.scrollTop = node.scrollHeight;
		}
	});

	function handleScroll() {
		const node = ref.current;
		const { scrollTop, clientHeight, scrollHeight } = node;
		const atBottom = scrollHeight === clientHeight + scrollTop;
		shouldScrollRef.current = atBottom;
	}

	return <div {...props} ref={ref} onScroll={handleScroll} />;
}

export default ChatScroller;
