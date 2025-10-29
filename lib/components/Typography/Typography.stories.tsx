import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: (
      <>
        <h2>Heading 2</h2>
        <p>Typography is a wrapper for HTML. Use headings from h2–h6 to create hiearchy.</p>
        <p>Use lists to summarize stuff.</p>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
        <h3>Heading 3</h3>
        <p>Typograhy is a wrapper for HTML.</p>
        <h4>Heading 4</h4>
        <p>Typograhy is a wrapper for HTML.</p>
        <h5>Heading 5</h5>
        <p>Typograhy is a wrapper for HTML.</p>
        <h6>Heading 6</h6>
        <p>Typograhy is a wrapper for HTML.</p>
      </>
    ),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const HighlightWords: Story = {
  args: {
    highlightWords: ['Typography', 'html'],
  },
};

export const Tables: Story = {
  args: {
    children: (
      <>
        <h2>Table example</h2>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 2</h2>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Left</th>
              <th style={{ textAlign: 'center' }}>Center</th>
              <th style={{ textAlign: 'right' }}>Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>Left</td>
              <td style={{ textAlign: 'center' }}>Center</td>
              <td style={{ textAlign: 'right' }}>Right</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Left</td>
              <td style={{ textAlign: 'center' }}>Center</td>
              <td style={{ textAlign: 'right' }}>Right</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 3</h2>
        <table>
          <thead>
            <tr>
              <th>Org.nr.</th>
              <th>Navn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>310229784</td>
              <td>SAMTIDIG EVENTYRLIG TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <td>311771302</td>
              <td>DISKRET DOBBEL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312987694</td>
              <td>MINKENDE LYKKELIG TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>310790311</td>
              <td>OVERMODIG LYSEBLÅ TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312285681</td>
              <td>INTRIKAT FIRKANTET TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>314167783</td>
              <td>LYSEBLÅ KJEMPENDE TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>212982202</td>
              <td>SKRIVEFØR OPPRØMT TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <td>310790389</td>
              <td>KLASSISK USTABIL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312186446</td>
              <td>RETTFERDIG LOGISK TIGER AS KONKURSBO</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 4</h2>
        <table>
          <tbody>
            <tr>
              <th>310229784</th>
              <td>SAMTIDIG EVENTYRLIG TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <th>311771302</th>
              <td>DISKRET DOBBEL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <th>312987694</th>
              <td>MINKENDE LYKKELIG TIGER AS KONKURSBO</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 5</h2>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>K</th>
              <th>V</th>
              <th>U</th>
              <th>T</th>
              <th>Mål</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brann</th>
              <td>26</td>
              <td>17</td>
              <td>3</td>
              <td>6</td>
              <td>59–39</td>
              <td>54</td>
            </tr>
            <tr>
              <th>Stabæk</th>
              <td>26</td>
              <td>14</td>
              <td>6</td>
              <td>6</td>
              <td>53–35</td>
              <td>48</td>
            </tr>
            <tr>
              <th>Viking</th>
              <td>26</td>
              <td>14</td>
              <td>5</td>
              <td>7</td>
              <td>50–40</td>
              <td>47</td>
            </tr>
            <tr>
              <th>Lillestrøm</th>
              <td>26</td>
              <td>12</td>
              <td>8</td>
              <td>6</td>
              <td>47–28</td>
              <td>44</td>
            </tr>
            <tr>
              <th>Rosenborg</th>
              <td>26</td>
              <td>12</td>
              <td>5</td>
              <td>9</td>
              <td>53–39</td>
              <td>41</td>
            </tr>
            <tr>
              <th>Tromsø</th>
              <td>26</td>
              <td>12</td>
              <td>4</td>
              <td>10</td>
              <td>45–44</td>
              <td>40</td>
            </tr>
            <tr>
              <th>Vålerenga</th>
              <td>26</td>
              <td>10</td>
              <td>6</td>
              <td>10</td>
              <td>34–34</td>
              <td>36</td>
            </tr>
            <tr>
              <th>Fredrikstad</th>
              <td>26</td>
              <td>9</td>
              <td>9</td>
              <td>8</td>
              <td>37–40</td>
              <td>36</td>
            </tr>
            <tr>
              <th>Lyn</th>
              <td>26</td>
              <td>10</td>
              <td>4</td>
              <td>12</td>
              <td>43–46</td>
              <td>34</td>
            </tr>
            <tr>
              <th>Strømsgodset</th>
              <td>26</td>
              <td>8</td>
              <td>6</td>
              <td>12</td>
              <td>34–47</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Aalesund</th>
              <td>26</td>
              <td>9</td>
              <td>3</td>
              <td>14</td>
              <td>40–56</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Odd</th>
              <td>26</td>
              <td>8</td>
              <td>3</td>
              <td>15</td>
              <td>33–43</td>
              <td>27</td>
            </tr>
            <tr>
              <th>Start</th>
              <td>26</td>
              <td>6</td>
              <td>8</td>
              <td>12</td>
              <td>34–44</td>
              <td>26</td>
            </tr>
            <tr>
              <th>Sandefjord</th>
              <td>26</td>
              <td>4</td>
              <td>4</td>
              <td>18</td>
              <td>26–53</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
