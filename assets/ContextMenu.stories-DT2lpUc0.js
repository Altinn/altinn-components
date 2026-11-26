var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-DKOj4Qmf.js";import{S as I}from"./ArrowRedo-DoTZyXz3.js";import{S as k}from"./EyeClosed-CeTdv3Go.js";import{S as w}from"./Archive-BdzDAVfI.js";import{S as B}from"./Trash-BH2M-vSd.js";import{S as D}from"./ClockDashed-J0wFRlbL.js";import{C as a}from"./ContextMenu-Bt2Mhw14.js";import{i as u}from"./inboxSearchResults-CBNB2Jwo.js";import{S as d}from"./TeddyBear-BNsEXUif.js";import{L as h}from"./List-B40AH4Pi.js";import{D as g}from"./DialogListItem-B6bDTlMH.js";import{L as y}from"./ListItem-DDb6uk5w.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CcFtrCc1.js";import"./Dropdown--jVfBx7U.js";import"./SearchField-TPXYOreq.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ItemLabel-CcblWyxm.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Typography-eLs7BNQP.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";import"./InformationSquare-CC_FvbA-.js";import"./dialogs-TAQnGsuQ.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CTcSPUDG.js";import"./AttachmentList-D4f8yqmd.js";import"./File-93INN30N.js";import"./Section-DDkkqRz5.js";import"./Flex-DwWkcKON.js";import"./TransmissionList-B3e4U_xB.js";import"./Transmission-BVYdVnfR.js";import"./SeenByLog-BHAHdRUc.js";import"./SeenByLogItem-CTysGoo-.js";import"./Byline-DdQrd2Ib.js";import"./SeenByLogButton-BTvtEl4i.js";import"./Divider-CzOqnME3.js";import"./DialogActions-CCckSmQV.js";import"./ButtonGroup-tVuhtuMt.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DvuL1i9R.js";import"./ItemLink-5KzMXfWD.js";import"./DialogByline-B-A8542E.js";import"./DialogMetadata-CWXJjNc6.js";import"./DialogStatus-BQQaoBSI.js";import"./Paperclip-PIdYsJwZ.js";import"./Files-UnpApt6z.js";import"./Checkmark-DXw908H5.js";import"./MetaBase-Czjqsry1.js";import"./MetaItem-BZDN8LoN.js";import"./ProgressIcon-D4s26k53.js";import"./ChevronUp-C6mjAtW4.js";import"./ChevronDown-E0Mu4V8Q.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,zt as __namedExportsOrder,Yt as default};
