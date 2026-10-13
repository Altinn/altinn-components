import{a7 as t}from"./iframe-BidFzEoe.js";import{S as b}from"./ArrowRedo-Bm5zfxjo.js";import{S as v}from"./EyeClosed-DvYGRt8Y.js";import{S as I}from"./Archive-C8P_Y27w.js";import{S as k}from"./Trash-C23skxme.js";import{S as w}from"./ClockDashed-DycEaa7b.js";import{C as i}from"./ContextMenu-Cdisi90L.js";import{i as l}from"./inboxSearchResults-DAcr9wYu.js";import{S as u}from"./TeddyBear-CPPfP3oO.js";import{L as x}from"./List-Ct336t9y.js";import{D as d}from"./DialogListItem-CXZN9Gio.js";import{L as g}from"./ListItem-CBUxCLcG.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./SearchField-CPTH-dMf.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./useHighlightedText-B2dzt3_l.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./Heading-XBMlN0kz.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronRight-B3flyXKQ.js";import"./InformationSquare-B1R5HfkF.js";import"./MenuElipsisHorizontal-BhNI2fK5.js";import"./dialogs-ByY4E-Em.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D6T0b_Di.js";import"./AttachmentList-R_8TW_FB.js";import"./AttachmentLink-DNddeI4B.js";import"./File-CopwnJ90.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./TransmissionList-B1m0XYzl.js";import"./Transmission-DozBCAYL.js";import"./SeenByLog-w3iRqWUU.js";import"./SeenByLogItem-RudfOR56.js";import"./Byline-BxuosFas.js";import"./SeenByLogButton-B4INdJOD.js";import"./Divider-Ckx4bjrf.js";import"./DialogActions-rh_OeuKW.js";import"./ButtonGroup-BDN4dAIH.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-mIr4q6rQ.js";import"./ItemLink-C3ysbGvA.js";import"./DialogByline-BhpIiIg0.js";import"./DialogMetadata-9IxGDcuN.js";import"./DialogStatus-AhQqS-az.js";import"./Paperclip-CpW1nOOW.js";import"./Files-yXDRDIo-.js";import"./MetaBase-CgV-ir1r.js";import"./MetaItem-Bt4jPWlc.js";import"./ProgressIcon-OKsJ4CtN.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Kt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},s={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},m={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ut=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Ut as __namedExportsOrder,Kt as default};
