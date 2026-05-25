import{j as t}from"./iframe-BFO1Hsm7.js";import{S as b}from"./ArrowRedo-IwAe62JJ.js";import{S as v}from"./EyeClosed-DvRUeUf3.js";import{S as I}from"./Archive-CTVg4aGD.js";import{S as k}from"./Trash-BNKVyqtr.js";import{S as w}from"./ClockDashed-bbJ-SAWp.js";import{S as l}from"./TeddyBear-DOqiCJMi.js";import{i as u}from"./inboxSearchResults-DxYnOlxj.js";import{C as r}from"./ContextMenu-0mdRRQji.js";import{L as x}from"./List-CuiWAA-k.js";import{L as d}from"./ListItem-Dt0yZNNU.js";import{D as g}from"./DialogListItem-CPmj_P1T.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bk4Ffxqs.js";import"./dialogs-CHR3m8-F.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Ns6NRSWH.js";import"./AttachmentList-B7AIJtj4.js";import"./AttachmentLink--s4njdW9.js";import"./Icon-B4PZu81w.js";import"./index-q4P8UESO.js";import"./Skeleton-BRac3_14.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./tooltip-DUJ67ouq.js";import"./Section-D_8M4GBJ.js";import"./Flex-QSO1QCFn.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./TransmissionList-Dg1CgKu4.js";import"./Transmission-CfeDkAme.js";import"./Typography-Bd9N_lP-.js";import"./SeenByLog-oBq2C_yU.js";import"./SeenByLogButton-03DA_5Yy.js";import"./Button-D67YnkXJ.js";import"./AvatarGroup-V6EVtbEK.js";import"./Avatar-KSmNIbNE.js";import"./SeenByLogItem-zle6_R3o.js";import"./Byline-CkK12Zmz.js";import"./Divider-BgVQeY5v.js";import"./DialogActions-B118CKsi.js";import"./ButtonGroupDivider-uQMX6KWa.js";import"./ChevronUp-DlVSDhFe.js";import"./ChevronDown-zCo1cSZK.js";import"./DropdownBase-DINt6JBc.js";import"./useClickOutside-L3O_QHxl.js";import"./ButtonGroup-VRxYnWM6.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./XMark-DHT-JiZe.js";import"./FieldBase-BLwJwwaJ.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./Checkmark-BeWey6nu.js";import"./ItemControls-Dko-TfIa.js";import"./ChevronRight-CdUbwk3C.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Dropdown-DNakKmHK.js";import"./MenuElipsisHorizontal-0YAAkQrN.js";import"./ItemLink-BjgcGFX2.js";import"./DialogByline-BV2J-O4z.js";import"./DialogMetadata-DViOeI0u.js";import"./DialogStatus-CWTzbYJX.js";import"./MetaItem-DIIqrzDH.js";import"./ProgressIcon-B6dji0lh.js";import"./Paperclip-dS4z7Edu.js";import"./Files-CzKR5UnY.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
