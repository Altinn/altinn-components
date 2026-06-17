import{a7 as t}from"./iframe-C7E9hFuS.js";import{S as b}from"./ArrowRedo-Cfh_-hkk.js";import{S as v}from"./EyeClosed-C0_H3-kr.js";import{S as I}from"./Archive-B-Yuun_M.js";import{S as k}from"./Trash-DXVTUHc5.js";import{S as w}from"./ClockDashed-DT_STtCz.js";import{C as i}from"./ContextMenu-C0QCVczp.js";import{i as l}from"./inboxSearchResults-Ue_JajYn.js";import{S as u}from"./TeddyBear-DWdJciZK.js";import{L as x}from"./List-CdmMPCCF.js";import{D as d}from"./DialogListItem-BJot5ZXN.js";import{L as g}from"./ListItem-HCh9Njwh.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DFRzn_Ll.js";import"./Dropdown-CODOojNF.js";import"./SearchField-B7eNYfaD.js";import"./MagnifyingGlass-K55ud6sH.js";import"./FieldBase-C9YC6jMS.js";import"./Typography-BHaJGqRT.js";import"./useHighlightedText-BVZd64N7.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";import"./useMenu-D_e4EtIh.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuListDivider-cJmmi06P.js";import"./MenuListHeading-anY2tX0X.js";import"./MenuItem-CJIUM84a.js";import"./ItemMedia-CHApnQjH.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./Heading-BjzdT1Qv.js";import"./ItemControls-BSxWin7C.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./ChevronRight-BkycUKsy.js";import"./InformationSquare-CD5xLXKd.js";import"./MenuElipsisHorizontal-B5xkva7P.js";import"./dialogs-CiIINWW9.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D74GQj9E.js";import"./AttachmentList-BglRe9Ae.js";import"./AttachmentLink-0JoOhOyj.js";import"./File-CgTJz0rh.js";import"./Section-0LkdBczO.js";import"./Flex-DW6TlYd6.js";import"./TransmissionList-CzAFg-RT.js";import"./Transmission-2OSsav4y.js";import"./SeenByLog-Byj4Z_cw.js";import"./SeenByLogButton-BfRF2Xhi.js";import"./SeenByLogItem-B0yGUsCe.js";import"./Byline-DA9sap8o.js";import"./Divider-C5OAdnqT.js";import"./DialogActions-CZnO8gMt.js";import"./ButtonGroupDivider-DZziluJn.js";import"./ChevronUp-COfk5MU7.js";import"./ChevronDown-S6psbACT.js";import"./DropdownBase-DpM2_COC.js";import"./useClickOutside-t0pHbKy_.js";import"./ButtonGroup-CAvVorAa.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DTwNvInU.js";import"./ItemLink-CVrGLXSa.js";import"./DialogByline-3i8yFFEm.js";import"./DialogMetadata-BMIY1GEs.js";import"./DialogStatus-DUD1c4R4.js";import"./MetaItem-yuZjUA9F.js";import"./ProgressIcon-BpKqS4-4.js";import"./Paperclip-D8Ms5lhg.js";import"./Files-CLBHzJx3.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
