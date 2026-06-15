import{a7 as t}from"./iframe-B7zm1HIO.js";import{S as b}from"./ArrowRedo-DQQVXJOZ.js";import{S as v}from"./EyeClosed-DvgksJjN.js";import{S as I}from"./Archive-C46OZ0Wp.js";import{S as k}from"./Trash-RuS005b0.js";import{S as w}from"./ClockDashed-eOrtry98.js";import{C as i}from"./ContextMenu-BrTPiQIt.js";import{i as l}from"./inboxSearchResults-DQGnYy16.js";import{S as u}from"./TeddyBear-CJPBSTWo.js";import{L as x}from"./List-CkiccdRL.js";import{D as d}from"./DialogListItem-DDRnKkfc.js";import{L as g}from"./ListItem-CiWjvc3C.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CJ7JaMXA.js";import"./Dropdown-C9l14m04.js";import"./SearchField-DukYslSD.js";import"./MagnifyingGlass-CVQmLynz.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./useHighlightedText-DWzAFf8R.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./useMenu-BJG43rHp.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./Heading-C4G9hOYj.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./ChevronRight-BItcH0VL.js";import"./InformationSquare-ZkZeHusi.js";import"./MenuElipsisHorizontal-nksXxlhw.js";import"./dialogs-BaYSyn4C.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BzQ1EaAD.js";import"./AttachmentList-K-ZBslfa.js";import"./AttachmentLink-YS1jcbS3.js";import"./File-Ci5ib_i1.js";import"./Section-DkuWWe6d.js";import"./Flex-N2sBTmCS.js";import"./TransmissionList-CGjAquEd.js";import"./Transmission-Vl4GlTih.js";import"./SeenByLog-CYLMfHD-.js";import"./SeenByLogButton-DCMMoRqr.js";import"./SeenByLogItem-DDQbAY-e.js";import"./Byline-avPt5eDg.js";import"./Divider-DLUyO367.js";import"./DialogActions-mo4g9crs.js";import"./ButtonGroupDivider-DmW0LByL.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./DropdownBase-6T5CfXFO.js";import"./useClickOutside-CWK7Zf2o.js";import"./ButtonGroup-DEQPq0-6.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-ChXBoego.js";import"./ItemLink-nWgCSWqv.js";import"./DialogByline-D8LzgGe-.js";import"./DialogMetadata-BuxrJiP1.js";import"./DialogStatus-hDR-HOd9.js";import"./MetaItem-DS_-8vgW.js";import"./ProgressIcon-9xH2UYWk.js";import"./Paperclip-Dn9d9bhb.js";import"./Files-CvjL5nKd.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
