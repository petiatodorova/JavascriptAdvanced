function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
  }

edit('https://www.youtube.com/watch?v=pghgNOWipj0', 'soulmate', 'matemate')