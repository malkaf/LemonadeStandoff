import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

const props = {
    cardOrientation: 'faceUp',
    value: 5,
    onClick: jest.fn()
}

describe('<Card />', () => {
    test('', () => {
        const { getByTestId} = render(<Card {...props}/>);
        const card = getByTestId('card');
        expect(card.classList.contains('faceUp')).toBe(true);

    })
    test('', () => {
        const { getByTestId, getByText} = render(<Card {...props}/>);
        const card = getByTestId('card');

        fireEvent.click(card);
        expect(props.onClick).toBeCalledWith(5);


    })
}) 
/*
import React from 'react';
import { render, fireEvent } from '@testUtils';
import PossibleTextAnswer, { PossibleTextAnswerProps } from './possibleTextAnswer';

const answerText = 'Exposing variables from memory';
const props = {
    answerText,
    answerIndex: 1,
    isQuestionSubmitted: false,
    showResults: false,
    onSelectAnswer: jest.fn(),
    isAnswerSelected: false
};

const componentToRender = (componentProps: PossibleTextAnswerProps): JSX.Element => (
    <PossibleTextAnswer {...componentProps} />
);

describe('<PossibleTextAnswer />', () => {
    test('renders a possible answer in full screen', () => {
        const { getByText, getByTestId } = render(componentToRender(props));
        const answerContent = getByText(answerText);
        const answerWrapper = getByTestId('content-wrapper');
        expect(answerContent).toBeInTheDocument();
        expect(getByText('B')).toBeInTheDocument();
        expect(answerContent.classList.contains('class-font-size-22')).toBe(true);
        expect(answerWrapper.classList.contains('class-min-height-5-rem')).toBe(true);
    });

    test('renders a possible answer in half screen', () => {
        const { getByText, getByTestId } = render(componentToRender({ ...props, halfScreen: true }));
        const answerContent = getByText(answerText);
        const answerWrapper = getByTestId('content-wrapper');
        expect(answerContent.classList.contains('class-font-size-22')).toBe(true);
        expect(answerWrapper.classList.contains('class-min-height-5-rem')).toBe(false);
    });

    test('when clicking on answer', () => {
        const { getByTestId, queryByTestId } = render(componentToRender(props));
        const answerButton = getByTestId('answer-button');
        const whiteDot = queryByTestId('dot-icon');
        fireEvent.click(answerButton);
        expect(props.onSelectAnswer).toHaveBeenCalledWith('2');
        expect(whiteDot).toBeNull();
    });

    test('after answer is clicked show your answer tooltip', () => {
        const { getByTestId } = render(componentToRender({ ...props, isAnswerSelected: true }));
        const answerButton = getByTestId('answer-button');
        const whiteDot = getByTestId('dot-icon');
        expect(answerButton.classList.contains('class-border-colour-selected-question')).toBe(true);
        expect(whiteDot).toBeInTheDocument();
        expect(whiteDot.getAttribute('title')).toEqual('Your answer');
    });

    test('after correct answer was clicked', () => {
        const { getByTestId, getByText } = render(
            componentToRender({
                ...props,
                status: 'correct',
                isQuestionSubmitted: true,
                showResults: true,
                answerIndex: 3
            })
        );
        const answerButton = getByTestId('answer-button');
        expect(getByText(answerText)).toBeInTheDocument();
        expect(getByTestId('correct')).toBeInTheDocument();
        expect(props.onSelectAnswer).not.toHaveBeenCalledWith('3');
        expect(answerButton.classList.contains('correct-answer')).toBe(true);
    });

    test('after wrong answer was clicked', () => {
        const { getByTestId, getByText } = render(
            componentToRender({ ...props, status: 'wrong', isQuestionSubmitted: true, showResults: true })
        );
        const answerButton = getByTestId('answer-button');
        expect(getByText(answerText)).toBeInTheDocument();
        expect(getByTestId('wrong')).toBeInTheDocument();
        expect(answerButton.classList.contains('wrong-answer')).toBe(true);
    });
});



import React from 'react';
import { render, fireEvent } from '@testUtils';
import MultichoiceSelect, { MultichoiceSelectProps } from './multichoiceSelect';

const props: MultichoiceSelectProps = {
    answers: ['Code A', 'Code B'],
    correctAnswers: [],
    userAnswers: [],
    setUserAnswers: jest.fn(),
    isQuestionSubmitted: false
};

const componentToRender = (componentProps: MultichoiceSelectProps): JSX.Element => (
    <MultichoiceSelect {...componentProps} />
);

describe('<SnippetMultichoiceHeade />', () => {
    test('renders multichoice select', () => {
        const { getByText } = render(componentToRender(props));
        expect(getByText('Select Answer')).toBeInTheDocument();
        fireEvent.mouseDown(getByText('Select Answer'));
        expect(getByText('Code A')).toBeInTheDocument();
        expect(getByText('Code B')).toBeInTheDocument();
    });

    test('on selecting an answer, call setUserAnswer with the chosen answer', () => {
        const { getByText } = render(componentToRender(props));
        fireEvent.mouseDown(getByText('Select Answer'));
        fireEvent.click(getByText('Code A'));
        expect(props.setUserAnswers).toBeCalledWith(['1']);
    });

    test('after user selects answer', () => {
        const { getByTestId, getByText } = render(componentToRender({ ...props, userAnswers: ['1'] }));
        expect(getByText('Code A')).toBeInTheDocument();
        expect(getByTestId('answer1').classList.contains('class-bg-colour-selected-question')).toBe(true);
        const whiteDot = getByTestId('dot-icon');
        expect(whiteDot).toBeInTheDocument();
        expect(whiteDot.getAttribute('title')).toEqual('Your answer');
    });

    test('after user submits answer', () => {
        const { getAllByTestId, getByText } = render(
            componentToRender({ ...props, userAnswers: ['1'], isQuestionSubmitted: true, correctAnswers: ['2'] })
        );
        fireEvent.mouseDown(getByText('Code A'));
        expect(getAllByTestId('answer1')[0].classList.contains('class-bg-colour-wrong-question')).toBe(true);
        expect(getAllByTestId('answer2')[0].classList.contains('class-bg-colour-correct-question')).toBe(true);
    });

    test('after user submits answer options should be disabled', () => {
        const { getAllByTestId, getByText } = render(
            componentToRender({ ...props, userAnswers: ['1'], isQuestionSubmitted: true, correctAnswers: ['2'] })
        );
        fireEvent.mouseDown(getByText('Code A'));
        expect(getAllByTestId('menu-item-1')[0]).toHaveAttribute('aria-disabled');
        expect(getAllByTestId('menu-item-2')[0]).toHaveAttribute('aria-disabled');
    });
});


*/