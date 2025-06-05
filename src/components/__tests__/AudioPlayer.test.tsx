import { render, fireEvent } from '@testing-library/react';
import AudioPlayer from '../AudioPlayer';

const mockSrc = 'https://example.com/audio.mp3';

describe('AudioPlayer', () => {
  it('renders title and artist', () => {
    const { getByText } = render(
      <AudioPlayer src={mockSrc} title="Song" artist="Artist" />
    );
    expect(getByText('Song')).toBeInTheDocument();
    expect(getByText('Artist')).toBeInTheDocument();
  });

  it('toggles play state', () => {
    const { getByRole } = render(
      <AudioPlayer src={mockSrc} title="Song" artist="Artist" />
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Pause');
  });
});
