var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-zDfzPjQ-.js";import{S as I}from"./ArrowRedo-xupc0HyX.js";import{S as k}from"./EyeClosed-Di5wDHm4.js";import{S as w}from"./Archive-CJqTsyOd.js";import{S as B}from"./Trash-BQPU0aQd.js";import{S as D}from"./ClockDashed-DZjsnkqQ.js";import{C as a}from"./ContextMenu-Bewy7zPd.js";import{i as u}from"./inboxSearchResults-Cq0mGr7l.js";import{S as d}from"./TeddyBear-CvojJWnA.js";import{L as h}from"./List-CN9gT4yl.js";import{D as g}from"./DialogListItem-HsTVUJoi.js";import{L as y}from"./ListItem-Ch60BFaY.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./SearchField-BRYpM6iz.js";import"./MagnifyingGlass-D8qauCMU.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ChevronRight-NBomJvaL.js";import"./FieldBase-DhhNDbiD.js";import"./Typography-D20OWptm.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./useMenu-D1ILj_Qw.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./MenuElipsisHorizontal-BZuKIlkb.js";import"./dialogs-BKGm3ds3.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D8XojFUz.js";import"./AttachmentList-CuBDmbgq.js";import"./AttachmentLink-DbuUV9bs.js";import"./File-B3m0V8Cf.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./TransmissionList-DWUikWCR.js";import"./Transmission-DK02xSEB.js";import"./SeenByLog-Cs0TRicJ.js";import"./SeenByLogItem-C_Z0TIFQ.js";import"./Byline-TWFgJpOx.js";import"./SeenByLogButton-CwyKZdOr.js";import"./Divider-DfF_JaXt.js";import"./DialogActions-B2tJYYj2.js";import"./ButtonGroup-DS66Ru9T.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CBBaiBDD.js";import"./ItemLink-C2Q5plIG.js";import"./DialogByline-C4RmjHLS.js";import"./DialogMetadata-B2Gi_Vmj.js";import"./DialogStatus-Hk9XBHFv.js";import"./Paperclip-DsRduUIE.js";import"./Files-D_SjqVgP.js";import"./MetaBase-Cj9Gn3aK.js";import"./MetaItem-CvmLb4XG.js";import"./ProgressIcon-BRIuczuu.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Gt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
